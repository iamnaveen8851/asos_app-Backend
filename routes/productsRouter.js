const { Router } = require("express");

const getProducts = require("../controllers/getProducts");
const addProduct = require("../controllers/addProduct");
const singleProduct = require("../controllers/singleProduct");

const productsRouter = Router();

productsRouter.get("/", getProducts);

productsRouter.get("/singleProduct/:id", singleProduct);
productsRouter.post("/addProduct", addProduct);

module.exports = productsRouter;
