const mongoose = require("mongoose"); 
var orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        count: Number,
        price: Number,
        total: Number,
        orderStatus: {
          type: String,
          default: "Processing",
        },
      },
    ],
    paymentInfo: {
      type: String,
      default: "pending",
    },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      mobile: {
        type: String,
        unique: true,
      },
      adr: {
        type: String,
        unique: true,
      },
      city: {
        type: String,
      },
      pincode: {
        type: String,
      },
      state: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", orderSchema);
