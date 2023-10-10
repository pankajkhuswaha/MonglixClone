const asyncHandle = require("express-async-handler");
const Products = require("../models/productModel");
const User = require("../models/userModel");
const Contact = require("../models/contactUsModel");
const Bulk = require("../models/bulkModel");
const Order = require("../models/orderModel");

const getAdminData = asyncHandle(async (req, res) => {
  try {
    const users = await User.find();
  const products = await Products.find();
  const contacts = await Contact.find();
  const bulks = await Bulk.find();
  const orders = await Order.find().populate([
    {
      path: "products.product",
      model: "product",
    },
    {
      path: "orderby",
      model: "User",
    },
  ]);
  res.json({ users, products, contacts, bulks, orders });
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }



});

module.exports = { getAdminData };
