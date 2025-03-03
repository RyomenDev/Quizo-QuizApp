import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import conf from "../conf/conf.js";

const JWT_SECRET = conf.JWT_SECRET;

// Helper function to filter user data (excluding sensitive info)
const filterUserData = (user) => ({
  name: user.name,
  email: user.email,
  age: user.age,
  gender: user.gender,
  address: user.address,
  phone: user.phone,
  picture: user.picture,
  userType: user.userType,
});

// User Registration
export const registerUser = async (req, res) => {
  //   console.log("registerUser");

  try {
    const { name, email, password, userType } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Convert email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      console.log("User already exists.");
      return res.status(400).json({ message: "User already exists." });
    }
    console.log("registerUser");

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email: normalizedEmail,
      //   password: hashedPassword,
      password, // Raw password, will be hashed in pre-save middleware
      userType: userType || "student", // Default to "student"
    });

    await newUser.save();
    return res.status(201).json({
      message: "User registered successfully.",
      user: {
        name: newUser.name,
        email: newUser.email,
        userType: newUser.userType,
      },
    });
    // return res.status(201).json({
    //   message: "User registered successfully.",
    //   user: filterUserData(newUser),
    // });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      message: "Error registering user.",
      error: error.message,
    });
  }
};

// User Login (Email & Password)
export const loginUserWithEmail = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Convert email to lowercase for consistency
    const normalizedEmail = email.toLowerCase();
    // console.log({ normalizedEmail,password });

    const user = await User.findOne({ email: normalizedEmail });

    console.log({ user });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      message: "Login successful.",
      token,
      user: filterUserData(user),
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return res
      .status(500)
      .json({ message: "Error logging in.", error: error.message });
  }
};

// Password Reset
export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Convert email to lowercase
    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res
      .status(500)
      .json({ message: "Error resetting password.", error: error.message });
  }
};

export { filterUserData };
