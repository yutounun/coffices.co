import { NextResponse } from "next/server";
import { NextRequest } from "../../../../node_modules/next/server";
import connectDB from "../../../libs/connectDB";
import { ReviewModel } from "../../../libs/models/ReviewModel";
import UserModel from "../../../libs/models/UserModel";
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
      throw new Error("User not found");
    }
    data.name = user.username;

    await ReviewModel.create(data);

    // return all cafe after updating to refresh the page
    const cafeList = await fetch("http://localhost:3000/api/cafe").then((res) =>
      res.json()
    );
    return NextResponse.json(cafeList);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
