const asyncHandle = require("express-async-handler");
const ProductModel = require("../models/productModel");
const addProduct = asyncHandle(async (req, res) => {
  const product = req.body;
  const alreadyavail = await ProductModel.findOne({ name: product.name });
  if (alreadyavail) {
    try {
      const updateproduct = await ProductModel.findOneAndUpdate(
        { name: product.name },
        product
      );
      res.send({
        message: "Product updated sucessfully",
        success: true,
        product: updateproduct,
      });
    } catch (error) {
      res.send({ message: error.message, error });
    }
  } else {
    try {
      const newproduct = await ProductModel.create(product);
      res.send({
        message: "Product Added sucessfully",
        success: true,
        product: newproduct,
      });
    } catch (error) {
      if (error.message.includes("duplicate")) {
        res.send({
          error: `Entered ${
            error.message.split("{")[1].split(":")[0]
          } is already registered`,
        });
      } else {
        res.send({ error: error.message, errorDetail: error });
      }
    }
  }
});

const deleteProduct = asyncHandle(async (req, res) => {
  const _id = req.params.id;
  if (_id) {
    try {
      await ProductModel.findByIdAndDelete({ _id });
      res.json({ success: true, message: "Deleted Sucessfully", _id });
    } catch (error) {
      res.json({ error: error.message });
    }
  } else res.status(500).send({ error: error.message });
});
const updateproduct = asyncHandle(async (req, res) => {
  if (req.body._id) {
    const { _id } = req.body;
    try {
      const updateproduct = await ProductModel.findOneAndUpdate(
        { _id },
        req.body
      );
    } catch (error) {
      res.send(500).send({ error: error.message });
    }
  } else res.json("invalid Operation");
});
const searchProduct = asyncHandle(async (req, res) => {
  try {
    const { search, category, subcategory, brand } = req.query;
    const filter = {};
    if (search) {
      filter.$or = [
        { name: { $regex: new RegExp(search, "i") } },
        { category: { $regex: new RegExp(search, "i") } },
        { brand: { $regex: new RegExp(search, "i") } },
      ];
    }
    if (category) {
      filter.category = category;
    }
    if (subcategory) {
      filter.subcategory = subcategory;
    }
    if (brand) {
      filter.brand = brand;
    }
    const products = await ProductModel.find(filter);
    res.json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
const getallProduct = asyncHandle(async (req, res, next) => {
  const Product = await ProductModel.find();
  if (req.query) {
    next();
  } else {
    res.json(Product);
  }
});

module.exports = {
  addProduct,
  getallProduct,
  deleteProduct,
  updateproduct,
  searchProduct,
};
