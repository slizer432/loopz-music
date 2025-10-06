import dotenv, { config } from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

import userRoutes from "./features/user/user.routes.js";
import authRoutes from "./features/auth/auth.routes.js";

connectDB();

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "API is running..." });
});
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
// Placeholder for more routes

export default app;
