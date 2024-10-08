import mongoose from "mongoose";

const toursSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://wildkasarwadi.com/assets/uploads/experiences/jungle_safari.jpg",
    },

    location: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
      noOfDays: {
        type: String,
        required: true,
      },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
    averageRating: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);
const Tours = mongoose.model("Tours", toursSchema);

export default Tours;
