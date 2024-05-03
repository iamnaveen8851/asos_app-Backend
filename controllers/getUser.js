const userModel = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const userData = await userModel.find();
    res.status(200).json({ message: "ALL USER'S DATA", userData });
  } catch (error) {
    res.status(500).json({ message: "NO USER FOUND" });
  }
};

module.exports = getUser;
