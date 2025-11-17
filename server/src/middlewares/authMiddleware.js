import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../features/user/user.model.js";
import Profile from "../features/profile/profile.model.js";

dotenv.config();

export const protect = async (req, res, next) => {
  try {
    if (!req.headers.authorization?.startsWith("Bearer")) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const profile = await Profile.findOne({ user: decoded.id }).populate(
      "user",
      ["-password", "-createdAt", "-updatedAt", "-__v", "-_id"]
    );

    if (!profile) {
      return res
        .status(401)
        .json({ message: "Not authorized, user not found" });
    }

    req.user = {
      ...profile.toObject(),
      ...profile.user.toObject(),
    };
    delete req.user.user;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
