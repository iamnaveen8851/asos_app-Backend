const productsModel = require("../models/productsModel");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalProducts = await productsModel.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await productsModel.find().skip(skip).limit(limit);

    res
      .status(200)
      .json({
        message: "All products data fetched successfully",
        currentPage: page,
        totalPages: totalPages,
        totalProducts,
        products: products,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProducts;
