//userRoutes.js
import express from "express";
import {
  updateRecruiterController,
  updateHelperController,
  getHelperProfileController,
  getRecruiterProfileController,
} from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

// Get Helper Profile
router.get("/helpers/profile", userAuth, getHelperProfileController);

// Get Recruiter Profile
router.get("/recruiters/profile", userAuth, getRecruiterProfileController);

//updaterecruiter || put
router.put("/recruiters/update", userAuth, updateRecruiterController);

//updatehelper || put
router.put("/helpers/update", userAuth, updateHelperController);

//export
export default router;
