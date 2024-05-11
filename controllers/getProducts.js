const productsModel = require("../models/productsModel");

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    let query = productsModel.find();

    // Search functionality
    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, "i"); // 'i' for case-insensitive search
      query = query.find({
        $or: [{ title: searchRegex }, { description: searchRegex }],
      });
    }

    // sorting products based on price
    if (req.query.sortByPrice) {
      const sortByPrice = req.query.sortByPrice.toLowerCase();
      if (sortByPrice === "asc") {
        query = query.sort({ price: 1 }); // asc order == 1
      } else if (sortByPrice === "desc") {
        query = query.sort({ price: -1 }); // desc order == -1
      }
    }

    const totalProducts = await productsModel.countDocuments(query); // Count documents using the same query
    const totalPages = Math.ceil(totalProducts / limit);

    const products = await query.skip(skip).limit(limit).exec();

    res.status(200).json({
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
