import TourGuide from "../Models/tourGuideSchema.js";
import { errorHandler } from "../Utils/Error.js";

export const createTourGuide = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(
        errorHandler(401, "Unauthorized access to create tour guide")
      );
    }
    const { name, email, aboutMe, languages, experience } = req.body;
    if (
      !name ||
      !email ||
      !aboutMe ||
      !languages ||
      !experience ||
      name === " " ||
      email === " " ||
      aboutMe === " " ||
      languages === " " ||
      experience === " "
    ) {
      return next(errorHandler(400, "All the fields are required"));
    }
    const newTourGuide = new TourGuide({
      name,
      email,
      aboutMe,
      languages,
      experience,
    });
    await newTourGuide.save();
    res
      .status(200)
      .json({ message: "Tour guide created successfully", newTourGuide });
  } catch (error) {
    next(error);
  }
};

export const getAllTourGuides = async (req, res, next) => {
  try {
    const tourGuides = await TourGuide.find();
    res
      .status(200)
      .json({ message: "All tour guides fetched successfully", tourGuides });
  } catch (error) {
    next(error);
  }
};
