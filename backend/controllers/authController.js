//authController.js
import User from "../models/userModel.js";
import Recruiter from "../models/recruiterModel.js";
import Helper from "../models/helperModel.js";

export const registerController = async (req, res, next) => {
  const { email, password, type, ...userData } = req.body;

  try {
    let user = new User({
      email,
      password,
      type,
    });

    await user.save();

    let userDetails;

    if (type === "recruiter") {
      userDetails = new Recruiter({
        userId: user._id,
        ...userData,
      });
    } else {
      userDetails = new Helper({
        userId: user._id,
        ...userData,
      });
    }

    await userDetails.save();

    const token = user.createJWT();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: user.email,
        type: user.type,
      },
      token,
      type,
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("Please provide all fields");
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("Invalid username or password");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new Error("Invalid username or password");
    }

    user.password = undefined;
    const token = user.createJWT();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
