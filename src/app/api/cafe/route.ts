import { NextResponse } from "next/server";
import { NextRequest } from "node_modules/next/server";
import connectDB from "@/libs/connectDB";
import { CafeModel } from "@/libs/models/CafeModel";
import { ReviewModel } from "@/libs/models/ReviewModel";
import { cafeKeywords } from "@/data/cafeCheckKeyword";
const axios = require("axios");

/**
 * Searches for an image using the Google Custom Search API.
 *
 * @param query search keyword
 * @returns image url
 */
async function searchImage(query: any) {
  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ID;
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    query
  )}&cx=${cx}&key=${apiKey}&searchType=image`;

  try {
    const response = await axios.get(url);
    const images = response.data.items;
    if (images && images.length > 0) {
      // Find cafe image
      for (let image of images) {
        if (isCafeImage(image)) {
          return image.link;
        }
      }
      // if it doesn't hit the related image, return default image
      return "/coffee.jpg";
    } else {
      return "/coffee.jpg";
    }
  } catch (error) {
    console.error("Error during image search", error);
    return "/coffee.jpg";
  }
}

function isCafeImage(image: any) {
  const title = image.title.toLowerCase();
  const snippet = image.snippet.toLowerCase();
  const link = image.link.toLowerCase();

  // Ensure it doesn't include "lookaside" which is image on facebook
  if (link.includes("lookaside")) {
    return false;
  }

  // Ensure it includes related words such as "cafe"
  return cafeKeywords.some(
    (keyword) => title.includes(keyword) || snippet.includes(keyword)
  );
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
    const searchQuery = request.nextUrl.searchParams.get("q");
    const areaQuery = searchQuery ? { area: searchQuery } : {};

    const stationQuery = searchQuery ? { station: searchQuery } : {};

    // search by area or station
    let cafes = null;
    cafes = await CafeModel.find(areaQuery);
    if (cafes.length === 0) cafes = await CafeModel.find(stationQuery);

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

    // カフェ全体を取得
    const allCafes = await CafeModel.find();

    // 名前とエリアで部分一致を確認
    // 引数のdataのnameを取得し、部分一致しているか確認
    const existingCafe = allCafes.find(
      (cafe) => cafe.title.includes(data.title) && cafe.area.includes(data.area)
    );

    // Check cafes with similar names and same address
    if (existingCafe) {
      // すでに存在していれば、area+name+stationで詳細の住所をgoogleで調べて、住所も同じか確認
      const postingCafeAddress = await searchAddress(
        `${data.area} ${data.station} ${data.title}`
      );
      const existingCafeAddress = await searchAddress(
        `${existingCafe.area} ${existingCafe.station} ${existingCafe.title}`
      );

      if (postingCafeAddress === existingCafeAddress) {
        console.error("A cafe with exact same address exsists already");
        return new NextResponse(
          JSON.stringify({ error: "Cafe already exists" }),
          { status: 409 }
        );
      }
    }

    const imageUrl = await searchImage(`${data.station} ${data.title}`).then(
      (url) => url
    );
    data.image = imageUrl;

    const cafe = await CafeModel.create(data);
    return NextResponse.json(cafe);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

/**
 * Searches for an address using the Google Geocoding API.
 *
 * @param {string} query - The search query (area + title).
 * @returns {Promise<string>} The formatted address.
 */
async function searchAddress(query: string) {
  const apiKey = process.env.NEXT_PUBLIC_ADDRESS_CHECK_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    query
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const results = response.data.results;
    if (results && results.length > 0) {
      return results[0].formatted_address;
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error during address search", error);
    return "";
  }
}
