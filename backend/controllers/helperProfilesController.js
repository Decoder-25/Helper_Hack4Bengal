import Helpers from "../models/helperModel.js";
import mongoose from "mongoose";

export const profileStatController = async (req, res) => {
  const stats = await Helpers.aggregate([
    //search by helperjob sector
    {
      $match: {
        jobSector: req.query.jobSector,
      },
    },
  ]);
  res.status(200).json ({ stats });
};
