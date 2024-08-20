import User from "../Models/userModel.js";
import { errorHandler } from "../Utils/Error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { mail } from "../Services/Nodemailer.js";

dotenv.config();

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All the fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res
      .status(200)
      .json({ message: "User registered successfully!", result: newUser });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All the fields are required"));
  }
  try {
    const userDetail = await User.findOne({ email });
    const userPassword = bcryptjs.compareSync(password, userDetail.password);
    if (!userDetail || !userPassword) {
      return next(errorHandler(400, "Invalid email or password"));
    }
    const token = jwt.sign(
      { id: userDetail._id, isAdmin: userDetail.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    const { password: passkey, ...rest } = userDetail._doc; //passwword masking
    res
      .status(200)
      .json({ message: "User logged in successfully!", rest, token });
  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  const { email, name, profilePic } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET_KEY
      );
      const { password: passkey, ...rest } = user._doc; //masking password
      res
        .status(200)
        .json({ message: "User logged in successfully!", rest, token });
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatePassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: profilePic,
      });
      await newUser.save();

      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET_KEY
      );
      const { password: passkey, ...rest } = newUser._doc; //masking password
      res
        .status(200)
        .json({ message: "User registered successfully!", rest, token });
    }
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    //jwt part token created after signin
    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    const passwordReset = `https://wildlens-tours-jany-daniel.netlify.app/reset-password/${user.id}/${token}`;
    const mailLink = await mail(user.email, "Reset Password", passwordReset);
    if (mailLink) {
      return res.status(200).json({
        message: "Password reset link send to the provided Email",
        token: token,
      });
    } else {
      throw new Error("Failed to sent Reset Link");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error Forgot Password" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, confirmPassword } = req.body;
    if (password != confirmPassword) {
      return res.status(404).json({ message: "Password Doesn't Match" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    user.password = hashPassword;
    await user.save();
    return res.status(200).json({ message: "password updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error Reset Password" });
  }
};