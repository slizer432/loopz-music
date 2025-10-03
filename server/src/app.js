import dotenv, { config } from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

connectDB();

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});

// Placeholder for more routes

export default app;
