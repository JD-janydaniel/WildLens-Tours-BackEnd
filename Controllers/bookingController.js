import Booking from "../Models/bookingSchema.js";
import { errorHandler } from "../Utils/Error.js";

export const cerateBooking = async (req, res, next) => {
  try {
    const {
      userId,
      tourId,
      guideId,
      name,
      phoneNumber,
      address,
      numberOfPeople,
      checkInDate,
      totalPrice,
    } = req.body;
    
    const newBooking = new Booking({
      userId,
      tourId,
      guideId,
      name,
      phoneNumber,
      address,
      numberOfPeople,
      checkInDate,
      totalPrice
    });
    await newBooking.save();
    res.status(200).json({ message: "Booking created successfully", newBooking });
  } catch (error) {
    next(error);
  }
};
