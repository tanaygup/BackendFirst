// require("dotenv").config();
import dotenv from "dotenv";
import { app } from "./app.js";
import conenctDB from "./db/index.js";
// const app = express();

dotenv.config({
  path: "./.env",
});

conenctDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection error ", error);
  });
