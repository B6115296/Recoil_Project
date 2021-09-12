const express = require('express');
const router = express.Router();

const { getAllProdcuts, getProdcutById} = require('../controller/productControllers');

//@desc GET all product from db
//@route GET /api/products
//@access Public
router.get('/', getAllProdcuts);

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getProdcutById);

module.exports = router;