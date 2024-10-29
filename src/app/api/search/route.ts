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
  const req = await request.json();
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query="cafe"&location=${req.lat},${req.lng}&radius=1500&key=${apiKey}`;

  console.log("🚀 ~ POST ~ req:", req);
  console.log("🚀 ~ POST ~ url:", url);

  try {
    const res = await axios.get(url);
    const placesResults = res.data.results;
    return NextResponse.json(placesResults);
  } catch (error) {
    console.error(
      "🚀 ~ searchCafeInTokyo ~ error:",
      error.response?.data || error.message
    );
  }
}
