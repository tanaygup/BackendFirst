// require("dotenv").config();
import dotenv from "dotenv";

import express from "express";
import conenctDB from "./db/index.js";
const app = express();

dotenv.config({
  path: "./env",
});

conenctDB();

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error in server: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
