import mongoose from "mongoose";

const tourGuideSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    aboutMe: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    // availability: {
    //   type: [Date],
    //   required: true,
    // },
  },
  { timestamps: true }
);
const TourGuide = mongoose.model('TourGuide', tourGuideSchema);

export default TourGuide;
