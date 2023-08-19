import { connectDB } from "@/utils/mongo";
import { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await connectDB();
  const collection = db.collection("portfolio");

  if (req.method === "GET") {
    try {
      const portfolioData = await collection.find({}).toArray();
      res.status(200).json({ portfolioData });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching portfolio data." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
