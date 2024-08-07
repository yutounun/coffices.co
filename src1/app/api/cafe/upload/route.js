import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return new NextResponse("Filename is required", { status: 400 });
  }

  // request.bodyがnullでないことを確認する
  if (!request.body) {
    return new NextResponse("No file content", { status: 400 });
  }

  // request.bodyをReadableStream<any>にキャストする
  const bodyStream = request.body;

  // put関数にbodyStreamを渡す
  const blob = await put(filename, bodyStream, {
    access: "public",
  });

  return NextResponse.json(blob);
}
