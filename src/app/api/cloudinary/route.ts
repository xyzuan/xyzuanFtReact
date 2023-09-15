import { cloudinary } from "@/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body;
  try {
    body = request.body ? await request.json() : null;
  } catch (error) {
    console.error("Error parsing request body:", error);
    return new Response("Error parsing request body", { status: 400 });
  }

  const { image } = body;

  const response = await cloudinary.uploader.upload(image);
  console.log(response);
  return NextResponse.json(response);
}
