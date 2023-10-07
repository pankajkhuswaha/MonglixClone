const asyncHandle = require("express-async-handler");
const Products = require("../models/productModel");
const User = require("../models/userModel");
const Contact = require("../models/contactUsModel");
const Bulk = require("../models/bulkModel");

const getAdminData = asyncHandle(async (req, res) => {
  const users = await User.find();
  const products = await Products.find();
  const contacts = await Contact.find();
  const bulks = await Bulk.find();
  res.json({ users, products, contacts, bulks });
});

module.exports = { getAdminData };
