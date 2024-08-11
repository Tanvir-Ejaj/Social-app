const User = require("../Model/userModel");
const { sendVerifyEmail } = require("../helpers/mailers");
const { jwToken } = require("../helpers/token");
const {
  validateEmail,
  validateUsername,
  validateLength,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");

exports.registrationController = async (req, res) => {
  try {
    const {
      fname,
      lname,
      username,
      email,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
    } = req.body;

    // Validate first name
    if (!validateLength(fname, 1, 30)) {
      return res.status(400).json({
        code: "VALIDATION_ERROR",
        field: "fname",
        message: "First Name should be between 1 to 30 characters.",
      });
    }

    // Validate last name
    if (!validateLength(lname, 1, 30)) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Last Name should be between 1 to 30 characters.",
          field: "lname",
        },
      });
    }

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Invalid email format.",
          field: "email",
        },
      });
    }

    // Validate password length
    if (!validateLength(password, 4, 45)) {
      return res.status(400).json({
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Password should be between 4 to 45 characters.",
          field: "password",
        },
      });
    }

    // Check if email is already in use
    const checkmail = await User.findOne({ email });
    if (checkmail) {
      return res.status(400).json({
        success: false,
        error: {
          code: "EMAIL_EXISTS",
          message: "Email already exists.",
          field: "email",
        },
      });
    }

    // Hash the password
    const crypted = await bcrypt.hash(password, 10);

    // Generate a unique username
    let tempUsername = fname + lname;
    let finalUsername = await validateUsername(tempUsername);

    // Create new user
    let user = new User({
      fname,
      lname,
      username: finalUsername,
      email,
      password: crypted,
      bMonth,
      bDay,
      bYear,
      gender,
    });

    await user.save();

    // Send verification email
    const emailToken = jwToken({ id: user._id.toString() }, "30m");
    const url = `${process.env.BASE_URL}/activate/${emailToken}`;
    sendVerifyEmail(user.email, user.fname, url);

    // Generate JWT token for user
    const token = jwToken({ id: user._id.toString() }, "7d");

    // Send success response
    res.status(201).json({
      success: true,
      message: "Registration successful.",
      data: {
        id: user._id,
        username: user.username,
        fname: user.fname,
        lname: user.lname,
        token: token,
        verified: user.verified,
      },
    });
  } catch (error) {
    // Handle errors and send a structured error response
    res.status(500).json({
      success: false,
      error: {
        code: "SERVER_ERROR",
        message: "An unexpected error occurred. Please try again later.",
        details: error.message,
      },
    });
  }
};

exports.verficationController = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.SECRET_TOKEN);
    const check = await User.findById(user.id);

    if (check.verified == true) {
      return res.send({ error: "Already Verified" });
    } else {
      await User.findByIdAndUpdate(user.id, { verified: true });
      return res.send({
        success: "Successfuly Verified",
      });
    }
  } catch (error) {
    res.send({ error: error.message });
  }
};


exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwToken({ id: user._id.toString() }, "7d");
    return res.status(200).json({
      data: {
        message: "Login successful",
        id: user._id,
        username: user.username,
        fname: user.fname,
        lname: user.lname,
        verified: user.verified,
        token:token
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
