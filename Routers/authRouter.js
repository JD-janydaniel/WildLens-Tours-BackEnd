import express from "express";
import { forgotPassword, googleAuth, loginUser, registerUser, resetPassword } from "../Controllers/authController.js";
import { resetAuthMiddleware } from "../Middleware/resetAuthMiddleware.js";

const router = express.Router();

router.post("/register-user",registerUser);
router.post("/login-user",loginUser);
router.post("/google-auth",googleAuth);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:id/:token", resetAuthMiddleware, resetPassword);

export default router;
