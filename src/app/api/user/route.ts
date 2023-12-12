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
    const user = await UserModel.findOne({ sessionId: data.id });
    if (user) return NextResponse.json(user);

    const editedUser = {
      sessionId: data.id,
      username: data.username,
      email: data.email,
      isAdmin: false,
      bio: "hello world",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      linkedIn: "https://www.linkedin.com/",
      homepage: "https://google.com/",
    };

    // Create new user
    const newUser = await UserModel.create(editedUser);
    return NextResponse.json(newUser);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

/**
 * Retrieves user data based on the provided email address.
 *
 * @param {NextRequest} request - The request object containing the email address.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the user data.
 */
export async function GET(request: NextRequest) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");

  try {
    const user = await UserModel.findOne({ sessionId });
    return NextResponse.json(user);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

export async function PUT(request: NextRequest) {
  await connectDB();

  try {
    const data = await request.json();
    const user = await UserModel.findByIdAndUpdate(data._id, data, {
      new: true,
    });
    return NextResponse.json(user);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
