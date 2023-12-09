import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import connectDB from "../../../../libs/connectDB";
import { CafeModel } from "../../../../libs/models/CafeModel";

export async function PUT(request: NextApiRequest) {
  await connectDB();

  try {
    const data = await request.json();
    const cafe = await CafeModel.findOneAndUpdate({ id: data.id }, data, {
      new: true,
    });
    return NextResponse.json(cafe);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
