//recruiterModel.js

import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: [true, "First name is Required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is Required"],
    },
    contactNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /\+\d{1,4}-\d{10}/.test(v);
        },
        message: "{VALUE} is not a valid phone number!",
      },
    },
    bio: {
      type: String,
      maxLength: 250,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Recruiter", recruiterSchema);
