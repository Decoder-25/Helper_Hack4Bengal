//authRoutes.js
import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routes

//Register || post
router.post("/register", registerController);

//Login || post
router.post("/login", loginController);

//export
export default router;
