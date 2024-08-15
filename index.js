import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import authRouter from "./Routers/authRouter.js";
import userRouter from "./Routers/userRouter.js";
import tourRouter from "./Routers/tourRouter.js";
import tourGuideRouter from "./Routers/tourGuideRouter.js";
import bookingRouter from "./Routers/bookingRouter.js";
import cookieParser from "cookie-parser";

dotenv.config();

//Middleware
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//error handlers
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//Database connection
connectDB();

//Default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to WildLens Tours API!" });
});

//Import routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/tour", tourRouter);
app.use("/api/guide", tourGuideRouter);
app.use("/api/booking", bookingRouter);

//listeners
app.listen(process.env.PORT, () => {
  console.log("Server is running on the port");
});
