"use server";

import { NextRequest, NextResponse } from "node_modules/next/server";
const axios = require("axios");
/**
 * Handles the HTTP POST request.
 *
 * @param {NextRequest} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing all cafe records including the created cafe object or an error message.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { placeId: string } }
) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Creviews%2Crating%2Cformatted_address%2Cphotos&place_id=${params.placeId}&key=${apiKey}`;

  try {
    const res = await axios.get(url);
    const rtn = res.data;
    return NextResponse.json(rtn);
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
  }
}
