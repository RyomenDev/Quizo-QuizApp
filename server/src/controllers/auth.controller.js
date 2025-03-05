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

const isPasswordValid = async (enteredPassword, storedHashedPassword) => {
  try {
    return await bcrypt.compare(enteredPassword, storedHashedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

const isPasswordStrong = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return passwordRegex.test(password);
};

// User Registration
export const registerUser = async (req, res) => {
  //   console.log("registerUser");

  try {
    const { name, email, password, userType } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        error: "All fields are required.",
      });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format.",
        error: "Invalid email format.",
      });
    }

    if (!isPasswordStrong(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.",
        error:
          "Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.",
      });
    }

    // Convert email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      //   return res.status(400).json({ message: "User already exists." });
      return res.status(400).json({
        message: "User already exists.",
        error: "User already exists.",
      });
    }

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
    console.error("Error registering user:", error.message);
    return res.status(500).json({
      //   message: "Error registering user.",
      message: error.message,
      error: error.message,
    });
  }
};

// User Login (Email & Password)
export const loginUserWithEmail = async (req, res) => {
  // console.log(req.body);

  try {
    const { email, password } = req.body;
    // console.log({ email, password });

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        error: "All fields are required",
      });
    }

    // Convert email to lowercase for consistency
    const normalizedEmail = email.toLowerCase();
    // console.log({ normalizedEmail,password });

    const user = await User.findOne({ email: normalizedEmail });

    // console.log({ user });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password.",
        error: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password.",
        error: "Invalid email or password.",
      });
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
    return res.status(500).json({
      // message: "Error logging in.",
      message: error.message,
      error: error.message,
    });
  }
};

// Password Reset
export const resetPassword = async (req, res) => {
  //   console.log("Reset-Password");

  try {
    const { newPassword } = req.body;
    const userId = req.user.userId;

    // console.log({ userId, newPassword });

    if (!newPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ _id: userId });
    // console.log({ user });

    if (!user) {
      return res.status(400).json({ message: "User not found." });
    }

    if (!isPasswordStrong(newPassword)) {
      return res.status(400).json({
        message:
          "Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.",
        error:
          "Password must be at least 6 characters long, with 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.",
      });
    }

    // const hashedPassword = await bcrypt.hash(newPassword, 10);
    // user.password = hashedPassword;

    // console.log({ user });
    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    console.error("Error resetting password:", error.message);
    return res
      .status(500)
      .json({ message: "Error resetting password.", error: error.message });
  }
};

export { filterUserData };
