import requests
import json    
import os
import google.generativeai as genai
from pymongo import MongoClient

def get_cafes_in_vancouver(api_key, min_rating=4.5):
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"

    params = {
        "location": "49.2827,-123.1207",  # Vancouverの緯度・経度
        "radius": 1000,                   # 半径1km
        "query": "coffee shop",                          # タイプはカフェ
        "key": api_key,
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        cafes = response.json().get('results', [])
        # min_rating 以上のカフェのみを抽出
        top_cafes = [cafe for cafe in cafes if cafe.get('rating', 0) >= min_rating]
        return top_cafes
    else:
        print("Error fetching data from Google Places API")
        return []

# Step 2: "wifi"が含まれるレビューのみを抽出
def get_reviews_for_cafe(api_key, place_id):
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        'place_id': place_id,
        'fields': 'reviews',
        'key': api_key,
    }

    response = requests.get(url, params=params)
    if response.status_code == 200:
        reviews = response.json().get('result', {}).get('reviews', [])
        return reviews
    else:
        print("Error fetching reviews from Google Places API")
        return []

# Step 3: Gemini APIでレビューを分析
# pip install google.generativeai
def analyze_reviews_with_gemini(gemini_api_key, reviews):
    genai.configure(api_key=gemini_api_key)

    # Create the model
    generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
    }

    model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    )

    chat_session = model.start_chat(
    history=[
    ]
    )

    reviews_text = "\n".join([review['text'] for review in reviews])
    prompt = (
        "I have collected multiple reviews for a cafe. Based on these reviews, analyze if the cafe has WiFi available, "
        "if it is suitable for working, the minimum price for a coffee, and if power outlets are available. "
        "Respond in JSON format with the following keys:\n"
        "- wifi_available: a boolean value or 'not sure'\n"
        "- wifi_confidence: a percentage indicating the confidence level\n"
        "- suitable_for_work: a boolean value or 'not sure'\n"
        "- work_confidence: a percentage indicating the confidence level\n"
        "- min_coffee_price: the minimum price for coffee in numerical format, or 'not sure'\n"
        "- max_coffee_price_confidence: a percentage indicating the confidence level\n"
        "- plug_available: a boolean value or 'not sure'\n"
        "- plug_confidence: a percentage indicating the confidence level\n"
        "- ai_analysis: a string with a summary of the analysis of the reviews\n"
        "- important_reviews: an array of up to 10 review texts that were most relevant for this analysis\n\n"
        "Please include only JSON format.\n\n"
        f"Reviews:\n{reviews_text}"
    )
    

    # プロンプトを送信してレスポンスを取得
    response = chat_session.send_message(prompt)

    # レスポンス内容を出力して確認
    print("Gemini API Response:", response.text)

    # バッククォートを取り除く
    response_text = response.text.strip('```json').strip('```').strip()
    print("Gemini API Response Text:", response_text)

    # JSONとしてレスポンスをパース
    analysis_result = json.loads(response_text)

    # 分析結果を取り出す
    wifi_available = analysis_result.get("wifi_available")
    wifi_confidence = analysis_result.get("wifi_confidence")
    suitable_for_work = analysis_result.get("suitable_for_work")
    work_confidence = analysis_result.get("work_confidence")
    min_coffee_price = analysis_result.get("min_coffee_price")
    max_coffee_price_confidence = analysis_result.get("max_coffee_price_confidence")
    plug_available = analysis_result.get("plug_available")
    plug_confidence = analysis_result.get("plug_confidence")
    ai_analysis = analysis_result.get("ai_analysis")
    important_reviews = analysis_result.get("important_reviews", [])

    rtn_json = {
        "wifi": {
            "wifi_available": wifi_available,
            "confidence": wifi_confidence,
        },
        "work": {
            "suitable_for_work": suitable_for_work,
            "confidence": work_confidence
        },
        "price": {
            "min_coffee_price": min_coffee_price,
            "confidence": max_coffee_price_confidence
        },
        "plug": {
            "plug_available": plug_available,
            "confidence": plug_confidence
        },
        "ai_analysis": ai_analysis,
        "important_reviews": important_reviews
    }

    return rtn_json


# Step 4: MongoDBにWiFi情報を保存
def update_cafe_info_in_mongodb(mongo_uri, total_cafe_results):
    # MongoDB クライアントのセットアップ
    client = MongoClient(mongo_uri)
    
    # co-office データベースの cafe_dev コレクションを取得
    db = client['co-office']
    collection = db['cafe_dev']
    
    print("🚀 total_cafe_results: ", total_cafe_results)

    # MongoDBにデータを保存する（既存の場合は更新）
    result = collection.insert_many(total_cafe_results)
    print(f"Inserted document ID: {result.inserted_ids}")


# Step 5: メイン処理
def get_wifi_status_for_cafes(api_key, gemini_api_key, mongo_uri):
    # MongoDB クライアントのセットアップ
    client = MongoClient(mongo_uri)
    db = client['co-office']
    collection = db['cafe_dev']

    # コレクション内のすべてのデータを一括削除
    # collection.delete_many({})
    # print("All documents in the 'cafe_dev' collection have been deleted.")
    
    cafes = get_cafes_in_vancouver(api_key)
    print("🚀 cafes: ", cafes)

    result = []

    for cafe in cafes:
        place_id = cafe.get('place_id')
        
        # 全てのレビューを取得
        reviews = get_reviews_for_cafe(api_key, place_id)
        # print("🚀 reviews: ", reviews)

        if reviews:
            # Geminiにレビューを投げてさらに分析
            gemini_analysis = analyze_reviews_with_gemini(gemini_api_key, reviews)
            print("🚀 gemini_analysis: ", gemini_analysis)

        # google places APIからカフェ情報とgeminiの分析結果をまとめる
        result.append({
            "name": cafe.get("name"),
            "open_now": cafe.get("opening_hours").get("open_now"),
            "place_id": cafe.get("place_id"),
            "address": cafe.get("vicinity"),
            "photo_ref": cafe.get("photoRef"),
            "rating": cafe.get("rating"),
            "wifi": gemini_analysis["wifi"],
            "work": gemini_analysis["work"],
            "coffee_price": gemini_analysis["price"],
            "plug": gemini_analysis["plug"],
            "ai_analysis": gemini_analysis["ai_analysis"],
            "important_reviews": gemini_analysis["important_reviews"]
        })

    # MongoDBにWiFi情報を保存
    update_cafe_info_in_mongodb(mongo_uri, result)


# Step 6: 実行
if __name__ == "__main__":
    GOOGLE_API_KEY = ""
    GEMINI_API_KEY = ""
    MONGO_URI = ""

    get_wifi_status_for_cafes(GOOGLE_API_KEY, GEMINI_API_KEY, MONGO_URI)