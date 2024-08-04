import { NextResponse } from "next/server";
import connectDB from "@/libs/connectDB";
import { CafeModel } from "@/libs/models/CafeModel";
import { ReviewModel } from "@/libs/models/ReviewModel";
import UserModel from "@/libs/models/UserModel";
import { ReviewI } from "@/types/cafes";

function getId(request: Request) {
  const url = new URL(request.url);
  return url.pathname.split("/").pop();
}

/**
 * Handles the HTTP GET request for a specific cafe.
 *
 * @param {NextRequest} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing the cafe details or an error message.
 */
export async function GET(request: Request) {
  try {
    await connectDB();

    const id = getId(request);
    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "Cafe ID is required" }),
        { status: 400 }
      );
    }

    const cafe = await CafeModel.findById(id);
    if (!cafe) {
      return new NextResponse(JSON.stringify({ error: "Cafe not found" }), {
        status: 404,
      });
    }

    const reviews = await ReviewModel.find({ cafeId: id });

    const reviewsWithUsers = await Promise.all(
      reviews.map(async (review: ReviewI) => {
        const user = await UserModel.findById(review.userId);
        const reviewObject = (review as any).toObject(); // 型アサーションを使用
        return { ...reviewObject, user };
      })
    );

    const averageRate =
      reviews.reduce((acc, review) => acc + review.rate, 0) / reviews.length ||
      0;

    const cafeWithReviews = {
      ...cafe.toJSON(),
      reviews: reviewsWithUsers,
      averageRate: averageRate,
    };

    return new NextResponse(JSON.stringify(cafeWithReviews), {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}

export async function DELETE(request: Request) {
  try {
    await connectDB();

    const id = getId(request);
    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "Cafe ID is required" }),
        { status: 400 }
      );
    }

    const cafe = await CafeModel.findByIdAndDelete(id);
    if (!cafe) {
      return new NextResponse(JSON.stringify({ error: "Cafe not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(cafe), {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    const id = getId(request);
    if (!id) {
      return new NextResponse(
        JSON.stringify({ error: "Cafe ID is required" }),
        { status: 400 }
      );
    }

    const data = await request.json();

    const cafe = await CafeModel.findByIdAndUpdate(id, data);
    if (!cafe) {
      return new NextResponse(JSON.stringify({ error: "Cafe not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify(cafe), {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }
}
