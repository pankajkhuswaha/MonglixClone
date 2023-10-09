const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model

var orderSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      require: true,
    },
    invoiceNo: {
      type: String,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        count: Number,
        total: Number,
      },
    ],
    total: { type: Number, require: true },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      default: "booking intiated",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Order", orderSchema);
