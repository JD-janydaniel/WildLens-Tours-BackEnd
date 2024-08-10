import express from "express";
import { googleAuth, loginUser, registerUser } from "../Controllers/authController.js";

const router = express.Router();

router.post("/register-user",registerUser);
router.post("/login-user",loginUser);
router.post("/google-auth",googleAuth);

export default router;
