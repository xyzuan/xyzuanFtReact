import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const works = await prisma.work.findMany();
  let response = {
    status: "success",
    results: works.length,
    works,
  };
  return NextResponse.json(response);
}
