const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  res.send("This is get user page");
};

const getUserCourses = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    // Find the user by ID
    const user = await User.findById(id).populate("coursesOwned");
    // Send the courses owned by the user
    res.json({ data: user.coursesOwned });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// signup user
const addUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    let findUser = await User.findOne({ email });

    if (findUser) {
      return res.json({
        success: false,
        message: "User Already Exist",
      });
    }

    const salt = 10;
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashPass,
    });

    const token = jwt.sign(
      {
        userID: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    return res.json({
      success: true,
      token,
      role: newUser.role,
      message: "User Create Successfully",
    });
  } catch (err) {
    console.log("Something went worng", err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userID: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    req.token = token;

    console.log("req.token is", req.token);

    res.cookie("token", token);

    return res.json({
      success: true,
      token,
      user: user.role,
      message: "User login Successfully",
    });
  } catch (err) {
    console.log("something went wrong", err);
  }
};

const updatePassword = async (req, res) => {
  try {
    let userId = req.params.id;

    const user = await User.findById(userId);

    const { password, confirmPass, newPass } = req.body;

    if (!(await bcrypt.compare(password, user.password))) {
      return res.json({ success: false, message: "Incorrect Password" });
    }

    if (newPass !== confirmPass) {
      return res.json({
        success: false,
        message: "New Password and Confirm Password do not match",
      });
    }

    const salt = 10;
    const hassNewPass = await bcrypt.hash(newPass, salt);

    user.password = hassNewPass;
    await user.save();

    return res.json({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

const forgetPassword = async (req, res) => {
  try {
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

module.exports = {
  getUser,
  addUser,
  loginUser,
  updatePassword,
  forgetPassword,
  getUserCourses,
};
