import { NextResponse } from "next/server";
import { NextRequest } from "node_modules/next/server";
import connectDB from "@/libs/connectDB";
import { ReviewModel } from "@/libs/models/ReviewModel";
import UserModel from "@/libs/models/UserModel";
import { CafeModel } from "@/libs/models/CafeModel";
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

    const user = await UserModel.findOne({ _id: data.userId });
    if (!user) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    data.name = user.username;

    await ReviewModel.create(data);

    // update review score on Cafe Model
    const cafe = await CafeModel.findOne({ _id: data.cafeId });
    if (!cafe) {
      return new NextResponse(JSON.stringify({ error: "Cafe not found" }), {
        status: 404,
      });
    }

    // Find all reviews related to the cafe
    const reviews = await ReviewModel.find({ cafeId: data.cafeId });

    const averageRate =
      reviews.reduce((prev, curr) => prev + curr.rate, 0) / reviews.length;
    cafe.rate = parseFloat(averageRate.toFixed(1));

    await cafe.save();

    // return all cafe after updating to refresh the page
    const cafeList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cafe`);

    return NextResponse.json(cafeList);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
