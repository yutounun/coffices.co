import { NextRequest, NextResponse } from "node_modules/next/server";
const axios = require("axios");
/**
 * Handles the HTTP POST request.
 *
 * @param {NextRequest} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing all cafe records including the created cafe object or an error message.
 */
export async function POST(request: NextRequest) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY;
  console.log("🚀 ~ POST ~ apiKey:", apiKey);
  // Google Places APIのText Searchのエンドポイント

  // リクエストパラメータを設定
  const query = "cafes in Vancouver";

  try {
    const res = await axios.post(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`
    );
    console.log("🚀 ~ searchCafeInTokyo ~ res:", res.data.results);
    return NextResponse.json(res.data.results);
  } catch (error) {
    console.error(
      "🚀 ~ searchCafeInTokyo ~ error:",
      error.response?.data || error.message
    );
  }
}
