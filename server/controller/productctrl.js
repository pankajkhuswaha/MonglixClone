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

const getallProduct = asyncHandle(async (req, res) => {
  const Product = await ProductModel.find();
  res.json(Product);
});

const deleteProduct = asyncHandle(async (req, res) => {
  const _id = req.params.id;
  if (_id) {
    try {
      await ProductModel.findByIdAndDelete({ _id });
      res.json({ success: true, message: "Deleted Sucessfully" });
    } catch (error) {
      res.json({ error: error.message });
    }
  } else res.json({ error: error.message });
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

module.exports = {
  addProduct,
  getallProduct,
  deleteProduct,
  updateproduct,
};
