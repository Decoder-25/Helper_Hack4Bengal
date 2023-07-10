//server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

//files import
import connectDB from "./config/db.js";

//routes

import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
// import helperProfilesRoutes from "./routes/helperProfilesRoutes.js";

//DOTENV config
dotenv.config();

//mongodb connection 
connectDB();

//rest objects
const app = express();

//middelware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
// app.use("/api/v1/helperProfilesStats", helperProfilesRoutes);

//validation middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

