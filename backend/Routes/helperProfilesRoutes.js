import express from "express";
import { profileStatController } from "../controllers/helperProfilesController.js";
import userAuth from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//profilestat || get
router.get("/profileStat",userAuth, profileStatController);

export default router;
