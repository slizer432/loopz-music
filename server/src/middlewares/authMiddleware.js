import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import * as userHelpers from "../utils/userHelpers.js";

dotenv.config();

export const protect = async (req, res, next) => {
  try {
    if (!req.headers.authorization?.startsWith("Bearer")) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const profile = await userHelpers.getUserData(decoded.id);

    if (!profile) {
      return res
        .status(401)
        .json({ message: "Not authorized, user not found" });
    }

    req.user = profile;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
