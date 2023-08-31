const asyncHandle = require("express-async-handler");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const Blogs = require("../models/blogModel");

const getcart = asyncHandle(async (req, res) => {
  const { _id } = req.user;

  try {
    const user = await User.findOne({ _id }).populate({
      path: "cart.products.product",
      select: "_id name price images",
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const data = user.cart.products.map((item) => {
      const product = item.product;
      return {
        name: product.name, // Include product name
        price: product.price,
        url: product.images[0],
        count: item.count,
        total: item.total,
        _id: product._id,
      };
    });
    const totalCartValue = user.cart.products.reduce(
      (total, item) => total + item.total,
      0
    );
    user.cart.totalValue = totalCartValue;
    console.log(totalCartValue);
    res.json({ products: data, totalCartValue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const addItemToCart = asyncHandle(async (req, res) => {
  const { _id } = req.user;
  const { id, qty } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await User.findOneAndUpdate(
      { _id },
      {
        $push: {
          "cart.products": {
            product: id,
            count: qty,
            total: qty * product.price,
          },
        },
      },
      { new: true }
    );
    const totalCartValue = user.cart.products.reduce(
      (total, item) => total + item.total,
      0
    );
    user.cart.totalValue = totalCartValue;
    console.log(totalCartValue);

    res.json(user.cart); // Return updated cart items
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const removeAnItem = asyncHandle(async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { _id },
      {
        $pull: { "cart.products": { product: id } },
      },
      { new: true }
    ).populate({
      path: "cart.products.product",
      select: "_id name price images",
    });

    const data = user.cart.products.map((item) => {
      const product = item.product;
      return {
        name: product.name, // Include product name
        price: product.price,
        url: product.images[0],
        count: item.count,
        total: item.total,
        _id: product._id,
      };
    });
    const totalCartValue = user.cart.products.reduce(
      (total, item) => total + item.total,
      0
    );
    user.cart.totalValue = totalCartValue;
    console.log(totalCartValue);
    res.json({ products: data, totalCartValue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const updatecart = asyncHandle(async (req, res) => {
  const { _id } = req.user;
  const { id, type } = req.body;
  console.log(type);
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cartItem = user.cart.products.find(
      (item) => item.product.toString() === id
    );
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    let previousQty = cartItem.count;
    console.log(previousQty < 10);
    if (type === "inc") {
      if (previousQty < 10) {
        previousQty = previousQty + 1;
      } else {
        return res.send({ error: "Max Limit is Reached" });
      }
    }
    if (type === "dec") {
      if (previousQty > 1) {
        previousQty = previousQty - 1;
      } else {
        return res.send({ error: "Quantity Should not less than 1" });
      }
    }
    cartItem.count = previousQty;
    cartItem.total = previousQty * product.price;
    user.cart.totalValue = user.cart.products.reduce(
      (total, item) => total + item.total,
      0
    );

    await user.save();
    await user.populate({
      path: "cart.products.product",
      select: "_id name price images",
    });

    const data = user.cart.products.map((item) => {
      const product = item.product;
      return {
        _id: product._id,
        name: product.name, // Include product name
        price: product.price,
        url: product.images[0],
        count: item.count,
        total: item.total,
      };
    });

    res.json({
      products: data,
      totalCartValue: user.cart.totalValue,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  addItemToCart,
  getcart,
  removeAnItem,
  updatecart,
};
