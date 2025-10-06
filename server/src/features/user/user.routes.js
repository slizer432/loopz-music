import express from "express";
import * as userController from "./user.controller.js";
import { protect } from "../../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);

router.get("/me", protect, userController.getLoggedInUser);

export default router;
