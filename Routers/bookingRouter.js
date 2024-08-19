import express from "express";
import { verifyToken } from "../Middleware/verifyToken.js";
import { cerateBooking, getAllBookingsById } from "../Controllers/bookingController.js";

const router = express.Router();

router.post('/create-booking',cerateBooking)
router.get('/getAllBooking/:id',getAllBookingsById)

export default router;
