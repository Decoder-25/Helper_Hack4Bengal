//userRoutes.js
import express from "express";
import {
  updateRecruiterController,
  updateHelperController,
} from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//updaterecruiter || put
router.put("/recruiters/update", userAuth, updateRecruiterController);

//updatehelper || put
router.put("/helpers/update", userAuth, updateHelperController);

//export
export default router;
