import dotenv from "dotenv";
import express from "express";

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
