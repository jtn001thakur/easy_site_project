const Product = require("../models/product.model");

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
      createdBy: req.user.id,
    });
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate(
      "createdBy",
      "name email"
    );
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    console.log("FOUND PRODUCT:", product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true, }
    );

    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};


const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product){
      return res.status(404).json({ message: "Product not found" });
    }
    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct};