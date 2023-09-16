import { cloudinary } from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { Work } from "@/types/Work";
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

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = request.body ? await request.json() : null;
    } catch (error) {
      console.error("Error parsing request body:", error);
      return new Response("Error parsing request body", { status: 400 });
    }

    const { data }: { data: Work } = body;

    const cloudinaryData = await cloudinary.uploader.upload(data.logo);
    const newData = await prisma.work.create({
      data: {
        logo: cloudinaryData.secure_url,
        jobTitle: data.jobTitle,
        instance: data.instance,
        instanceLink: data.instanceLink,
        address: data.address,
        date: data.date,
      },
    });

    return new Response(JSON.stringify(newData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating work:", error);
    return new Response("Error creating work", { status: 500 });
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

    const { id, data }: { id: number; data: Work } = body;

    const cloudinaryData = await cloudinary.uploader.upload(data.logo);
    const updatedPortfolio = await prisma.work.update({
      where: { id },
      data: {
        logo: cloudinaryData.secure_url,
        jobTitle: data.jobTitle,
        instance: data.instance,
        instanceLink: data.instanceLink,
        address: data.address,
        date: data.date,
      },
    });

    return new Response(JSON.stringify(updatedPortfolio), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating work:", error);
    return new Response("Error updating work", { status: 500 });
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

    const deletedData = await prisma.work.delete({
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
