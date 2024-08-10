import bcryptjs from "bcryptjs";
import { errorHandler } from "../Utils/Error.js";
import User from "../Models/userModel.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(400, "Unauthorized access to update the user..."));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password must be at least 6 characters long...")
      );
    }
  }
  req.body.password = bcryptjs.hashSync(req.body.password, 10);
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(
          400,
          "Username should be between 7 and 20 characters long..."
        )
      );
    }
    if (req.body.username.includes(" ")) {
      return next(
        errorHandler(400, "Username should not contain any spaces...")
      );
    }
    if (req.body.username != req.body.username.toLowerCase()) {
      return next(errorHandler(400, "Username must be in lowercase"));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9 ]+$/)) {
      return next(
        errorHandler(
          400,
          "Specal characters not allowed only letters and numbers allowed"
        )
      );
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      {
        new: true,
      }
    );
    const { password, ...rest } = updatedUser._doc;
    res
      .status(200)
      .json({ message: "User profile updated successfully", rest });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(400, "Unauthorized access to delete the user..."));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
