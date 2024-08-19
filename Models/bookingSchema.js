import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tours",
    },
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TourGuide",
    },
    name:{
      type:String,
      required: true,
 
   },
   phoneNumber:{
    type: Number,
    required: true,
    },
    address: {
      type: String,
      required: true,
   },
    numberOfPeople: {
      type: Number,
      required: true,
      default: 1,
    },
    checkInDate:{
      type: Date,
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "confirmed",
    },
    trancationId:{
      type: String,
      default: "bhjjhbjcdnislnkjsbc@janydaniel",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking",bookingSchema);

export default Booking;
