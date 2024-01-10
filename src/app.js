import express from "express";
import connectDB from "./database/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on("error", (error) => {
  console.error("Connection Error", error);
});

connection.once("open", () => {
  console.log("Database connected !");
});

const app = express();
routes(app);

export default app;
