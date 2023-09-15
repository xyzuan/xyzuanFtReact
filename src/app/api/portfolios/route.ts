import { cloudinary } from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { PortfolioItem } from "@/types/Portofolio";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const portfolios = await prisma.portfolio.findMany();
  let response = {
    status: "success",
    results: portfolios.length,
    portfolios,
  };
  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = request.body ? await request.json() : null;
    } catch (error) {
      console.error("Error parsing request body:", error);
      return new Response("Error parsing request body", { status: 400 });
    }

    const { data }: { data: PortfolioItem } = body;

    const cloudinaryData = await cloudinary.uploader.upload(data.img);
    const newData = await prisma.portfolio.create({
      data: {
        title: data.title,
        content: data.content,
        img: cloudinaryData.secure_url,
        href: data.href,
      },
    });

    return new Response(JSON.stringify(newData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating portfolio:", error);
    return new Response("Error creating portfolio", { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    let body;
    try {
      body = request.body ? await request.json() : null;
    } catch (error) {
      console.error("Error parsing request body:", error);
      return new Response("Error parsing request body", { status: 400 });
    }

    const { id, data }: { id: number; data: PortfolioItem } = body;

    const cloudinaryData = await cloudinary.uploader.upload(data.img);
    const updatedPortfolio = await prisma.portfolio.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
        img: cloudinaryData.secure_url,
        href: data.href,
      },
    });

    return new Response(JSON.stringify(updatedPortfolio), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return new Response("Error updating portfolio", { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    let body;
    try {
      body = request.body ? await request.json() : null;
    } catch (error) {
      console.error("Error parsing request body:", error);
      return new Response("Error parsing request body", { status: 400 });
    }

    const { id }: { id: number } = body;

    const deletedData = await prisma.portfolio.delete({
      where: { id },
    });

    return new Response(JSON.stringify(deletedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating portfolio:", error);
    return new Response("Error updating portfolio", { status: 500 });
  }
}
