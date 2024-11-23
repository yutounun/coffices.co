import requests
import json    
import re
import google.generativeai as genai
from dotenv import load_dotenv
import os
import time
from pymongo import MongoClient

load_dotenv()

def get_cafes_in_vancouver(api_key, min_rating=3):
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"

    # バンクーバーの中心座標
    base_lat, base_lng = 49.2827, -123.1207
    
    # La Cuisson cafe
    # base_lat, base_lng = 49.2499582,-123.1310152

    # 1kmごとにずらして検索するためのオフセットリスト（-5kmから5kmまで1km間隔）
    offsets = [-1, 0, 1]

    all_cafes = []

    # 各オフセットの組み合わせで位置を変更しながら検索
    for lat_offset in offsets:
        for lng_offset in offsets:
            # 緯度・経度を調整
            location = f"{base_lat + (lat_offset * 0.009)}, {base_lng + (lng_offset * 0.012)}"
            params = {
                "location": location,
                "radius": 1000,  # 1kmの半径で検索
                "query": "coffee shop",
                "key": api_key,
            }

            while True:
                response = requests.get(url, params=params)
                if response.status_code == 200:
                    cafes = response.json().get('results', [])
                    print("🚀 ~ cafes:", cafes)
                    all_cafes.extend([cafe for cafe in cafes if cafe.get('rating', 0) >= min_rating])

                    # 次のページがある場合、next_page_tokenを取得
                    next_page_token = response.json().get('next_page_token')
                    if next_page_token:
                        # 次のリクエストのために、ページトークンを設定し少し待機（トークンが有効になるまで少し時間が必要なことがあります）
                        params['pagetoken'] = next_page_token
                        time.sleep(5)  # トークンが有効になるまで少し待機（5秒くらい）
                    else:
                        # 次のページがない場合はループを終了
                        break
                else:
                    print("Error fetching data from Google Places API")
                    break

    # 重複を排除（カフェのplace_idでユニークにする）
    unique_cafes = {cafe['place_id']: cafe for cafe in all_cafes}.values()

    print("🚀 ~ all_cafes_len:", len(unique_cafes))
    return list(unique_cafes)

# Step 2: Google Places APIでレビューのみを抽出
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
        "Analyze the following reviews and determine specific information about the cafe. Respond strictly in JSON format with the following structure:\n\n"
        "{\n"
        '  "wifi_available": boolean, // true if no negative mentions about WiFi exist, assume wifi_available is true, otherwise false or "not sure"\n'
        '  "wifi_confidence": integer, // percentage confidence based on the number of mentions (0-100)\n'
        '  "plug_available": boolean, // true if any review mentions plugs, power outlets, sockets, or charging stations positively, otherwise false or "not sure"\n'
        '  "plug_confidence": integer, // percentage confidence based on the number of mentions (0-100)\n'
        '  "suitable_for_work": boolean, // true if any review indicates it is good for work (e.g., quiet, comfortable seating, good lighting, spacious, not crowded, people working on laptops), otherwise false or "not sure"\n'
        '  "work_confidence": integer, // percentage confidence based on the number of mentions (0-100)\n'
        '  "min_coffee_price": number | string, // minimum price of any drink (not limited to coffee), or "not sure" if no drink prices are mentioned\n'
        '  "min_coffee_price_confidence": integer, // percentage confidence based on the number of mentions (0-100)\n'
        '  "ai_analysis": string, // summary of the analysis of the reviews\n'
        '  "important_reviews": [string] // up to 10 review texts that were most relevant for this analysis\n'
        "}\n\n"
        "Special rules:\n"
        "- If no negative mentions about WiFi exist, assume wifi_available is true.\n"
        "- If no negative mentions about plugs (e.g., 'no plugs', 'plugs not available') exist, assume plug_available is true.\n"
        "- For suitable_for_work, consider the following phrases: 'quiet', 'comfortable seating', 'good lighting', 'spacious', 'not crowded', 'people working on laptops', or similar expressions. If multiple indicators suggest suitability, set suitable_for_work to true; otherwise, set it to false or 'not sure'.\n"
        "- For min_coffee_price, look for the lowest price of any drink (e.g., tea, juice, coffee). If no drink prices are mentioned, return 'not sure'.\n"
        "- For plug mentions, include words such as 'plug', 'power outlet', 'socket', 'charging station', or similar terms.\n"
        "- For WiFi mentions, look for terms such as 'WiFi', 'internet', or similar.\n\n"
        f"Reviews:\n{reviews_text}"
    )



    # プロンプトを送信してレスポンスを取得
    response = chat_session.send_message(prompt)

    # レスポンス内容を出力して確認
    print("Gemini API Response:", response.text)
    response_text = response.text.strip('```json').strip('```').strip('```').strip()
    
    # 正規表現を使ってレスポンスから余分な文字を取り除く
    response_text_cleaned = re.sub(r'```\w*|```', '', response_text).strip()

    try:
        # JSONをロード
        analysis_result = json.loads(response_text_cleaned)
    except json.JSONDecodeError as e:
        print("JSONDecodeError:", e)
        return {}

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
    client = MongoClient(mongo_uri, serverSelectionTimeoutMS=10000000, socketTimeoutMS=10000000)
    
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
    client = MongoClient(mongo_uri, serverSelectionTimeoutMS=1000000, socketTimeoutMS=1000000)
    db = client['co-office']
    collection = db['cafe_dev']

    # コレクション内のすべてのデータを一括削除
    # collection.delete_many({})
    # print("All documents in the 'cafe_dev' collection have been deleted.")
    
    cafes = get_cafes_in_vancouver(api_key)
    # print("🚀 cafes: ", cafes)

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
            "name": cafe.get("name", "Unknown"),
            "open_now": cafe.get("opening_hours", {}).get("open_now", None) if cafe.get("opening_hours") else None,
            "place_id": cafe.get("place_id", "Unknown"),
            "address": cafe.get("vicinity", "Unknown"),
            "photo_ref": cafe.get("photoRef", "None"),
            "rating": cafe.get("rating", 0),
            "wifi": gemini_analysis.get("wifi", "Unknown"),
            "work": gemini_analysis.get("work", "Unknown"),
            "coffee_price": gemini_analysis.get("price", "Unknown"),
            "plug": gemini_analysis.get("plug", "Unknown"),
            "ai_analysis": gemini_analysis.get("ai_analysis", "Unknown"),
            "important_reviews": gemini_analysis.get("important_reviews", "Unknown")
        })


    # MongoDBにWiFi情報を保存
    update_cafe_info_in_mongodb(mongo_uri, result)


# Step 6: 実行
if __name__ == "__main__":
    GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
    MONGO_URI = os.getenv("MONGO_URI")

    get_wifi_status_for_cafes(GOOGLE_API_KEY, GEMINI_API_KEY, MONGO_URI)