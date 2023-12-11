import { NextResponse } from "next/server";
import { NextRequest } from "../../../../node_modules/next/server";
import connectDB from "../../../libs/connectDB";
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
    const data = await request.json();
    // Check if user already exists
    const user = await UserModel.findOne({ email: data.email });
    if (user) return NextResponse.json(user);

    // Create new user
    const newUser = await UserModel.create(data);
    return NextResponse.json(newUser);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
