import { NextRequest, NextResponse } from "node_modules/next/server";
const axios = require("axios");
/**
 * Handles the HTTP POST request.
 *
 * @param {NextRequest} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing all cafe records including the created cafe object or an error message.
 */
export async function POST(request: NextRequest) {
  console.log(
    "🚀 ~ connectDB ~ process.env.NEXT_PUBLIC_DB_API_KEY:",
    process.env.NEXT_PUBLIC_DB_API_KEY
  );
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY;
  console.log("🚀 ~ POST ~ apiKey:", apiKey);
  const req = await request.json();

  const url = req.location
    ? `https://maps.googleapis.com/maps/api/place/textsearch/json?query="coffee shop in "${req.location}"&radius=1500&key=${apiKey}` // search
    : `https://maps.googleapis.com/maps/api/place/textsearch/json?query="coffee shops"&location=${req.currentLocation.lat},${req.currentLocation.lng}&radius=1500&key=${apiKey}`; // current location

  console.log("🚀 ~ POST ~ req:", req);
  console.log("🚀 ~ POST ~ url:", url);

  try {
    const res = await axios.get(url);
    const placesResults = res.data.results;
    console.log("🚀 ~ POST ~ placesResults:", placesResults);
    return NextResponse.json(placesResults);
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
  }
}
