const productsModel = require("../models/productsModel");

const addProduct = async (req, res) => {
  try {
    const addProduct = await productsModel.create(req.body);
    res.status(201).json({message : "Product added successfully", addProduct});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addProduct;
