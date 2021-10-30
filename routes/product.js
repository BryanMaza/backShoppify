"use strict";
const express = require("express");
const productController = require("../controllers/product");
const router = express.Router();

router.post("/product", productController.addProduct);
router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProduct);

module.exports = router;
