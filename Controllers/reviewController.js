import Review from "../Models/reviewSchema.js";
import Tours from "../Models/toursSchema.js";
import { errorHandler } from "../Utils/Error.js";

export const createReview = async (req, res, next) => {
  try {
    const { userId, tourId, rating, review } = req.body;
    const newReview = new Review({ userId, tourId, rating, review });
    await newReview.save();
    res.status(200).json({ message: "Review added successfully", newReview });
  } catch (error) {
    next(error);
  }
};


// Get Reviews and Average Rating for a Specific Tour
export const getTourReviews = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Fetch reviews for the tour
    const reviews = await Review.find({  tourId: id }).populate("userId", "username");

    // Calculate the average rating
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating =
      reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : 0;

    // Update the tour's average rating
    await Tours.findByIdAndUpdate({ _id: id }, { averageRating },{ new: true });

    res.status(200).json({
      message: "Reviews fetched successfully",
      reviews,
      averageRating,
    });
  } catch (error) {
    next(error);
  }
};
