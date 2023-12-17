import { NextResponse } from "next/server";
import { CafeI } from "types/cafes";
import { NextRequest } from "../../../../node_modules/next/server";
import connectDB from "../../../libs/connectDB";
import { CafeModel } from "../../../libs/models/CafeModel";
import { ReviewModel } from "../../../libs/models/ReviewModel";

async function getCafeWithReviews(cafes: any) {
  return await Promise.all(
    cafes.map(async (cafe: any) => {
      const reviews = await ReviewModel.find({ cafeId: cafe._id });
      return { ...cafe.toJSON(), reviews };
    })
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
    const stationQuery = request.nextUrl.searchParams.get("station");
    // stationQueryがなければ、reviewスコア順に表示

    const query = stationQuery ? { station: stationQuery } : {};
    const cafes = await CafeModel.find(query);

    const cafesWithReviews = await Promise.all(
      cafes.map(async (cafe: any) => {
        const reviews = await ReviewModel.find({ cafeId: cafe._id });
        return { ...cafe.toJSON(), reviews };
      })
    );

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
    const data = await request.json();
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
