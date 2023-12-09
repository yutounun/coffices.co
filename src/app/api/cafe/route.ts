import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import connectDB from "../../../libs/connectDB";
import { CafeModel } from "../../../libs/models/CafeModel";

/**
 * Retrieves the cafes based on the specified station name or returns all cafes if no station name is provided.
 *
 * @param {NextApiRequest} request - The Next.js API request object.
 * @return {Promise<NextResponse>} A promise that resolves to the response containing the JSON representation of the retrieved cafes.
 */
export async function GET(request: NextApiRequest) {
  await connectDB();

  try {
    const stationQuery = request.nextUrl.searchParams.get("station");
    // station name is specified, filter by station name
    const query = stationQuery ? { station: stationQuery } : {};
    const cafes = await CafeModel.find(query);
    return NextResponse.json(cafes);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
