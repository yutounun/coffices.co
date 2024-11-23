import { NextResponse } from "next/server";
import { NextRequest } from "node_modules/next/server";
import connectDB from "@/libs/connectDB";
import { CafeDevModel } from "@/libs/models/CafeDevModel";

export async function GET(
  request: NextRequest,
  { params }: { params: { placeId: string } }
) {
  await connectDB();

  try {
    const { placeId } = params;
    const analytics = await CafeDevModel.findOne({ place_id: placeId });

    if (!analytics) {
      return new NextResponse(
        JSON.stringify({ error: "Analytics data not found" }),
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(analytics);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
