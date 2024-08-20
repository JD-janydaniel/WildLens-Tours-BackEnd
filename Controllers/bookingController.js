import Booking from "../Models/bookingSchema.js";
import { errorHandler } from "../Utils/Error.js";
import Tours from "../Models/toursSchema.js";

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
      totalPrice,
    });
    await newBooking.save();
    res
      .status(200)
      .json({ message: "Booking's created successfully", newBooking });
  } catch (error) {
    next(error);
  }
};


export const getAllBookingsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("User ID received:", id);

    const bookings = await Booking.find({ userId: id }).populate(
      "tourId",
      "title location price"
    );

    console.log("Bookings found:", bookings);

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found for this user" });
    }

    res.status(200).json({ message: "Bookings fetched successfully", bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    next(error);
  }
};
