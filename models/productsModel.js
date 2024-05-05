const { default: mongoose } = require("mongoose");

const productsSchema = mongoose.Schema({
    img : {type : String, required: true},
    title: {type : String, required: true},
    price : {type : String, required: true},
},{
    versionKey : false
})


const productsModel = mongoose.model("products", productsSchema)


module.exports = productsModel

