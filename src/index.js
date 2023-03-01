import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js";
//middleware

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan());

app.use(cookieParser());

app.use("/api/auth", authRouter);

import "./config/database.js";
const PORT = 5001;
app.listen(PORT, () => {
  console.log("connected.....");
});
