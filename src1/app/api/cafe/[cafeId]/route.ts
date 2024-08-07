import { NextResponse } from "next/server";
import connectDB from "@/libs/connectDB";
import { CafeModel } from "@/libs/models/CafeModel";
import { ReviewModel } from "@/libs/models/ReviewModel";
import UserModel from "@/libs/models/UserModel";
import { ReviewI } from "@/types/cafes";

async function withDB(
  handler: () => Promise<NextResponse>
): Promise<NextResponse> {
  try {
    await connectDB();
    return await handler();
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

function getId(request: Request): string | null {
  const url = new URL(request.url);
  return url.pathname.split("/").pop() || null;
}

function validateId(id: string | null): NextResponse | null {
  if (!id) {
    return new NextResponse(JSON.stringify({ error: "Cafe ID is required" }), {
      status: 400,
    });
  }
  return null;
}

function createResponse(data: any, status: number = 200): NextResponse {
  return new NextResponse(JSON.stringify(data), {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

/**
 * Handles the HTTP GET request for a specific cafe.
 *
 * @param {Request} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing the cafe details or an error message.
 */
export async function GET(request: Request) {
  return withDB(async () => {
    const id = getId(request);
    const validationError = validateId(id);
    if (validationError) return validationError;

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

    return createResponse(cafeWithReviews);
  });
}

/**
 * Handles the HTTP DELETE request for a specific cafe.
 *
 * @param {Request} request - The request object.
 * @return {Promise<NextResponse>} A JSON response indicating the result of the delete operation.
 */
export async function DELETE(request: Request) {
  return withDB(async () => {
    const id = getId(request);
    const validationError = validateId(id);
    if (validationError) return validationError;

    const cafe = await CafeModel.findByIdAndDelete(id);
    if (!cafe) {
      return new NextResponse(JSON.stringify({ error: "Cafe not found" }), {
        status: 404,
      });
    }

    return createResponse(cafe);
  });
}

/**
 * Handles the HTTP PUT request for a specific cafe.
 *
 * @param {Request} request - The request object.
 * @return {Promise<NextResponse>} A JSON response containing the updated cafe details or an error message.
 */
export async function PUT(request: Request) {
  return withDB(async () => {
    const id = getId(request);
    const validationError = validateId(id);
    if (validationError) return validationError;

    const data = await request.json();

    const cafe = await CafeModel.findByIdAndUpdate(id, data, { new: true });
    if (!cafe) {
      return new NextResponse(JSON.stringify({ error: "Cafe not found" }), {
        status: 404,
      });
    }

    return createResponse(cafe);
  });
}
