import Tours from "../Models/toursSchema.js";
import { errorHandler } from "../Utils/Error.js";

export const createTours = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return next(errorHandler(400, "You are not allowed to create a tour"));
    }
    const { title, description, image, location, price,noOfDays} =
      req.body;
    if (
      !title ||
      !description ||
      !image ||
      !location ||
      !price ||
      !noOfDays||
      title === " " ||
      description === " " ||
      image === " " ||
      location === " " ||
      price === " " ||
      noOfDays === " "
    ) {
      return next(errorHandler(400, "All the fields are required"));
    }
    const newTours = new Tours({
      title,
      description,
      image,
      location,
      price,
      noOfDays,
    });
    await newTours.save();
    res.status(200).json({ message: "Tours created successfully", newTours });
  } catch (error) {
    next(error);
  }
};

export const getAllTours = async (req, res, next) => {
  try {
    const tours = await Tours.find();
    res.status(200).json({ message: "All tours fetched successfully", tours });
  } catch (error) {
    next(error);
  }
};

export const getTourById = async (req, res, next) => {
  try {
    const {id} = req.params;
    console.log(id);
    const tours = await Tours.findById(id);
    if (!tours) {
      return next(errorHandler(404, "Tour not found"));
    }
    res.status(200).json({ message: "Tour fetched successfully", tours });
  } catch (error) {
    next(error);
  }
};

export const updateTours = async (req, res, next) => {
  try {
    const {id} = req.params;
    const { title, description, image, location, price, noOfDays } = req.body;
    const updatedTour = await Tours.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: title,
          description: description,
          image: image,
          location: location,
          price: price,
          noOfDays : noOfDays
        },
      },
      { new: true }
    );
    if (!updatedTour) {
      return next(errorHandler(404, "Tour not found"));
    }
    res.status(200).json({ message: "Tour updated successfully", updatedTour });
  } catch (error) {
    next(error);
  }
};

export const deleteTours = async (req, res, next) => {
  try {
    const {id} = req.params;
    const deletedTour = await Tours.findByIdAndDelete(id);
    if (!deletedTour) {
      return next(errorHandler(404, "Tour not found"));
    }
    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (error) {
    next(error);
  }
};
