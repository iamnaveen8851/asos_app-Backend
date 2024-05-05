const { Router } = require("express");

const getProducts = require("../controllers/getProducts");
const addProduct = require("../controllers/addProduct");

const productsRouter = Router();

productsRouter.get("/", getProducts);

productsRouter.post("/addProduct", addProduct);


module.exports = productsRouter;