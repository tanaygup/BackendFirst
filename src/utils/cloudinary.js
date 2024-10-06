import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadCloud = async (localFIlePath) => {
  try {
    if (!localFIlePath) return null;

    const res = await cloudinary.uploader.upload(localFIlePath, {
      resource_type: "auto",
    });

    console.log("File has been uploaded ", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(localFIlePath);
    return null;
  }
};

export { uploadCloud };
