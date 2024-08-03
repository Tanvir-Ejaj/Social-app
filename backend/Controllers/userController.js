const User = require("../Model/userModel");
const { sendVerifyEmail } = require("../helpers/mailers");
const { jwToken } = require("../helpers/token");
const {
  validateEmail,
  validateUsername,
  validateLength,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    if (!validateLength(fname, 1, 30)) {
      return res.status(400).json({
        message: "First Name Should Be between 1 to 30 Characters",
      });
    }

    if (!validateLength(lname, 1, 30)) {
      return res.status(400).json({
        message: "First Name Should Be between 1 to 30 Characters",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    if (!validateLength(password, 4, 45)) {
      return res.status(400).json({
        message: "Password is too short",
      });
    }

    const checkmail = await User.findOne({ email });

    if (checkmail) {
      return res.status(400).json({
        message: "Email Already Exist",
      });
    }

    const crypted = await bcrypt.hash(password, 10);

    let tempUsername = fname + lname;

    let finalUsername = await validateUsername(tempUsername);

    let user = await new User({
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

    user.save();

    const emailToken = jwToken({ id: user._id.toString() }, "30m");
    const url = `${process.env.BASE_URL}/activate/${emailToken}`;
    sendVerifyEmail(user.email, user.fname, url);

    const token = jwToken({ id: user._id.toString() }, "7d");

    res.send({
      success: "Registration Successfull",
      id: user._id,
      username: user.username,
      fName: user.fname,
      lName: user.lname,
      token: token,
      verfied: user.verified,
    });
  } catch (error) {
    res.send(error);
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
      return res.status(404).send({ error: "User Not Found" });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(404).send({ error: "Wrong Credentials" });
    }
    const token = jwToken({ id: user._id.toString() }, "7d");
    res.send({
      success: "Login Successfull",
      id: user._id,
      username: user.username,
      fName: user.fname,
      lName: user.lname,
      token: token,
      verfied: user.verified,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
