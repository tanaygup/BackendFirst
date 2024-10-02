import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conenctDB = async () => {
  try {
    const connectionInst = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`DB host :${connectionInst.connection.host}`);
  } catch (error) {
    console.log("Mongodb xonnection error ", error);
    process.exit(1);
  }
};

export default conenctDB;
