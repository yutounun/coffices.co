export interface CafeDetailI {
  _id: string; // ドキュメントID
  name: string; // カフェの名前
  open_now: boolean; // 営業中かどうか
  place_id: string; // Google PlacesのPlace ID
  address: string | null; // 住所（nullの可能性あり）
  photo_ref: string | null; // 写真の参照（nullの可能性あり）
  rating: number; // レーティング

  // WiFiに関する情報
  wifi: {
    wifi_available: string; // WiFi利用可否 ("yes", "no", "not sure" など)
    confidence: number; // WiFi情報の確信度
  };

  // 作業に適しているか
  work: {
    suitable_for_work: string; // 作業に適しているか ("yes", "no", "not sure" など)
    confidence: number; // 作業に適しているかの確信度
  };

  // コーヒーの価格情報
  coffee_price: {
    min_coffee_price: string; // 最低価格（"not sure" などの文字列）
    confidence: number; // 価格情報の確信度
  };

  // コンセントに関する情報
  plug: {
    plug_available: string; // コンセント利用可否 ("yes", "no", "not sure" など)
    confidence: number; // コンセント情報の確信度
  };

  ai_analysis: string; // AI分析によるコメント
  important_reviews: string[]; // 重要なレビューの配列
}
