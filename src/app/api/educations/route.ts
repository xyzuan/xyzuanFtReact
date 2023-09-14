import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const educations = await prisma.education.findMany();
  let response = {
    status: "success",
    results: educations.length,
    educations,
  };
  return NextResponse.json(response);
}
