const productsModel = require("../models/productsModel");

const singleProduct = async(req, res)=> {
    const {id} = req.params
try {
    const singleProduct = await productsModel.find({_id : id})
    res.status(200).json({message : `Single Product found with ${id}`, singleProduct })
} catch (error) {
    res.status(500).json({message : error.message});
}
}

module.exports = singleProduct;