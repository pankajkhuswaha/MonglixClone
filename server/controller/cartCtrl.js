const asyncHandle = require("express-async-handler");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const Blogs = require("../models/blogModel");

const applyDiscount = (price, discountPercentage) => {
  return price - (price * discountPercentage) / 100;
};
const getcart = asyncHandle(async (req, res) => {
  const { _id } = req.user;

  try {
    const user = await User.findOne({ _id }).populate({
      path: "cart.products.product",
      select: "_id name price images retaildiscount silverdiscount golddiscount platinumdiscount",
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const data = user.cart.products.map((item) => {
      const product = item.product;
      console.log(product)
      let discount = 0; // Default discount
      if (user?.role) {
        switch (user.role) {
          case "user":
            discount = parseInt(product.retaildiscount);
            break;
          case "silver":
            discount = parseInt(product.silverdiscount);
            break;
          case "gold":
            discount = parseInt(product.golddiscount);
            break;
          case "platinum":
            discount = parseInt(product.platinumdiscount);
            break;
          default:
            discount = parseInt(product.retaildiscount);
            break;
        }
      }
      return {
        name: product.name, // Include product name
        price: product.price,
        url: product.images[0],
        count: item.count,
        total: item.total,
        _id: product._id,
        discount,
      };
    });
    const totalCartValue = user.cart.products.reduce(
      (total, item) => total + item.total,
      0
    );
    const totalProductPrice = user.cart.products.reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );
    user.cart.totalValue = totalCartValue;
    res.json({ products: data, totalCartValue, totalProductPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//* old add tp cart code
// const addItemToCart = asyncHandle(async (req, res) => {
//   const { _id } = req.user;
//   const { id, qty } = req.body;

//   try {
//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const user = await User.findOneAndUpdate(
//       { _id },
//       {
//         $push: {
//           "cart.products": {
//             product: id,
//             count: qty,
//             total: qty * product.price,
//           },
//         },
//       },
//       { new: true }
//     );
//     const totalCartValue = user.cart.products.reduce(
//       (total, item) => total + item.total,
//       0
//     );
//     user.cart.totalValue = totalCartValue;
//     console.log(totalCartValue);
//     res.json(user.cart); // Return updated cart items
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

const addItemToCart = asyncHandle(async (req, res) => {
  const { _id } = req.user;
  const { id, qty } = req.body;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const productId = product._id;
    const user = await User.findOne({ _id });
    const cartItem = user.cart.products.find((item) =>
      item.product.equals(productId)
    );
    let discount = 0;
    if (user?.role) {
      switch (user.role) {
        case "user":
          discount = parseInt(product.retaildiscount);
          break;
        case "silver":
          discount = parseInt(product.silverdiscount);
          break;
        case "gold":
          discount = parseInt(product.golddiscount);
          break;
        case "platinum":
          discount = parseInt(product.platinumdiscount);
          break;
        default:
          discount = parseInt(product.retaildiscount);
          break;
      }
    }
    if (cartItem) {
      cartItem.count += qty;
      cartItem.total = applyDiscount(product.price * cartItem.count, discount);
    } else {
      user.cart.products.push({
        product: id,
        count: qty,
        total: applyDiscount(product.price * qty, discount),
      });
    }
    const totalCartValue = user.cart.products.reduce(
      (total, item) => total + item.total,
      0
    );
    user.cart.totalValue = totalCartValue;
    await user.save();
    res.json(user.cart);
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

//* old update cart code
// const updatecart = asyncHandle(async (req, res) => {
//   const { _id } = req.user;
//   const { id, type } = req.body;
//   console.log(type);
//   try {
//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const user = await User.findOne({ _id });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const cartItem = user.cart.products.find(
//       (item) => item.product.toString() === id
//     );
//     if (!cartItem) {
//       return res.status(404).json({ message: "Cart item not found" });
//     }
//     let previousQty = cartItem.count;
//     console.log(previousQty < 10);
//     if (type === "inc") {
//       if (previousQty < 10) {
//         previousQty = previousQty + 1;
//       } else {
//         return res.send({ error: "Max Limit is Reached" });
//       }
//     }
//     if (type === "dec") {
//       if (previousQty > 1) {
//         previousQty = previousQty - 1;
//       } else {
//         return res.send({ error: "Quantity Should not less than 1" });
//       }
//     }
//     cartItem.count = previousQty;
//     cartItem.total = previousQty * product.price;
//     user.cart.totalValue = user.cart.products.reduce(
//       (total, item) => total + item.total,
//       0
//     );

//     await user.save();
//     await user.populate({
//       path: "cart.products.product",
//       select: "_id name price images",
//     });

//     const data = user.cart.products.map((item) => {
//       const product = item.product;
//       return {
//         _id: product._id,
//         name: product.name, // Include product name
//         price: product.price,
//         url: product.images[0],
//         count: item.count,
//         total: item.total,
//       };
//     });

//     res.json({
//       products: data,
//       totalCartValue: user.cart.totalValue,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

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
        return res.send({ error: "Quantity Should not be less than 1" });
      }
    }

    let discount = 0;
    if (user?.role) {
      switch (user.role) {
        case "user":
          discount = parseInt(product.retaildiscount);
          break;
        case "silver":
          discount = parseInt(product.silverdiscount);
          break;
        case "gold":
          discount = parseInt(product.golddiscount);
          break;
        case "platinum":
          discount = parseInt(product.platinumdiscount);
          break;
        default:
          discount = parseInt(product.retaildiscount);
          break;
      }
    }

    cartItem.count = previousQty;
    cartItem.total = applyDiscount(product.price * previousQty, discount);

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
      let dc;
      if (user?.role) {
        switch (user.role) {
          case "user":
            dc = parseInt(product.retaildiscount);
            break;
          case "silver":
            dc = parseInt(product.silverdiscount);
            break;
          case "gold":
            dc = parseInt(product.golddiscount);
            break;
          case "platinum":
            dc = parseInt(product.platinumdiscount);
            break;
          default:
            break;
        }
      }
      return {
        _id: product._id,
        name: product.name, // Include product name
        price: product.price,
        url: product.images[0],
        count: item.count,
        total: item.total,
        discount: dc,
      };
    });

    const totalProductPrice = user.cart.products.reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );
    res.json({
      products: data,
      totalCartValue: user.cart.totalValue,
      totalProductPrice,
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
