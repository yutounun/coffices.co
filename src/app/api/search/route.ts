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
    const placesResults = res.data.results;
    // const photoRef = placesResults[0].photos[0].photo_reference;
    // console.log("🚀 ~ searchCafeInTokyo ~ photoRef:", photoRef);

    // const photo = await axios.get(
    //   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${apiKey}`
    // );
    // const photoUrl = photo.url;

    // console.log("🚀 ~ searchCafeInTokyo ~ photoUrl:", photo.url);
    // const rtn = {
    //   ...placesResults,
    //   photoUrl: photoUrl,
    // };
    return NextResponse.json(placesResults);
  } catch (error) {
    console.error(
      "🚀 ~ searchCafeInTokyo ~ error:",
      error.response?.data || error.message
    );
  }
}
