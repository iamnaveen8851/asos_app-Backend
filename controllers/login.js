const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      bcrypt.compare(password, existingUser.password, function (err, result) {
        // result == false
        if (result) {
          const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            process.env.SECRET_KEY
          );

          res
            .status(201)
            .json({
              message: "User logged in successfully",
              token,
              existingUser,
            });
        } else {
          res.status.json({ message: "Wrong password" });
        }
      });
    } else {
      res.status(500).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = login;
