import { NextResponse } from "next/server";
import { CafeI } from "types/cafes";
import { NextRequest } from "../../../../node_modules/next/server";
import connectDB from "../../../libs/connectDB";
import { CafeModel } from "../../../libs/models/CafeModel";
import { ReviewModel } from "../../../libs/models/ReviewModel";

const axios = require("axios");

/**
 * Searches for an image using the Google Custom Search API.
 *
 * @param query search keyword
 * @returns image url
 */
async function searchImage(query: string) {
  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ID;
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    query
  )}&cx=${cx}&key=${apiKey}&searchType=image`;

  try {
    const response = await axios.get(url);
    const images = response.data.items;
    if (images.length > 0) {
      const foundImage = images[0];
      return foundImage ? foundImage.link : "/coffee.jpg";
    } else {
      return "/coffee.jpg";
    }
  } catch (error) {
    console.error("Error during image search", error);
  }

  return null;
}

/**
 * Retrieves the cafes based on the specified station name or returns all cafes if no station name is provided.
 *
 * @param {NextRequest} request - The Next.js API request object.
 * @return {Promise<NextResponse>} A promise that resolves to the response containing the JSON representation of the retrieved cafes.
 */
export async function GET(request: NextRequest) {
  await connectDB();

  try {
    const stationQuery = request.nextUrl.searchParams.get("station");
    const query = stationQuery ? { station: stationQuery } : {};
    const cafes = await CafeModel.find(query);

    const cafesWithReviews = await Promise.all(
      cafes.map(async (cafe: any) => {
        const reviews = await ReviewModel.find({ cafeId: cafe._id });
        const averageRate =
          reviews.reduce((acc, review) => acc + review.rate, 0) /
          reviews.length;
        return { ...cafe.toJSON(), reviews, averageRate };
      })
    );

    // 平均スコアで降順に並び替え
    cafesWithReviews.sort((a, b) => b.averageRate - a.averageRate);

    return NextResponse.json(cafesWithReviews);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

/**
 * Handles the HTTP POST request.
 *
 * @param {NextRequest} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing all cafe records including the created cafe object or an error message.
 */
export async function POST(request: NextRequest) {
  await connectDB();

  try {
    let data = await request.json();
    data.rate = 0;

    const imageUrl = await searchImage(`${data.station} ${data.title}`).then(
      (url) => url
    );
    data.image = imageUrl;

    await CafeModel.create(data);
    const cafes = await CafeModel.find({});
    return NextResponse.json(cafes);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
