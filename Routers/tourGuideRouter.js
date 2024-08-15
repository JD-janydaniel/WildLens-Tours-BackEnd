import express from "express";
import { verifyToken } from "../Middleware/verifyToken.js";
import { createTourGuide, getAllTourGuides } from "../Controllers/tourGuideController.js";

const router = express.Router();

router.post('/create-tour-Guide',verifyToken,createTourGuide)
router.get("/getAllTourGuides",getAllTourGuides)

export default router;