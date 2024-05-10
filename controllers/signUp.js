const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(403).json({ message: "User already exists" });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        return res.status(500).json({ message: "Invalid password" });
      }

      const newUser = await userModel.create({
        email,
        password: hash,
        firstName,
        lastName
      });

      res.status(201).json({ message: "User Sign Up successfully", newUser });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = signUp;
