import { v2 as cloudinary } from "cloudinary";

export interface CloudinaryResponse {
  public_id: string;
  secure_url: string;
}

cloudinary.config({
  cloud_name: "myxyzuan",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };
