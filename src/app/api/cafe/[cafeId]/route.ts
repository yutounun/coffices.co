import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import connectDB from "../../../../libs/connectDB";
import { CafeModel } from "../../../../libs/models/CafeModel";

export async function PUT(request: NextApiRequest) {
  await connectDB();

  try {
    const data = await request.json();
    await CafeModel.findByIdAndUpdate(data._id, data, {
      new: true,
    });
    // return all cafes after updating to refresh the page
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

/**
 * Deletes a cafe from the database based on the given request.
 *
 * @param {NextApiRequest} request - The request object containing information about the cafe to be deleted.
 * @return {NextResponse} A response object containing the deleted cafe if successful, or an error message if an error occurs.
 */
export async function DELETE(request: NextApiRequest) {
  await connectDB();

  try {
    const cafeId = request.nextUrl.pathname.split("/").pop();
    await CafeModel.findByIdAndDelete(cafeId);
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
