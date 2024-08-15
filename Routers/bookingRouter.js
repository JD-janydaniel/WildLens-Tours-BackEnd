import express from "express";
import { verifyToken } from "../Middleware/verifyToken.js";
import { cerateBooking } from "../Controllers/bookingController.js";

const router = express.Router();

router.post('/create-booking',cerateBooking)

export default router;
