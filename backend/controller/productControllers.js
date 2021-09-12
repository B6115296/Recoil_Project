const Product = require('../models/Product');

const getAllProdcuts = async (req, res) => {
    try{
        const products = await Product.find({});

        res.json(products);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getProdcutById = async (req, res) => {
    try{
        const products = await Product.findById(req.params.id);

        res.json(products);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllProdcuts,
    getProdcutById
}