const mongoose = require("mongoose");
const BulkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    mobile: {
      type: String,
      require: true,
      unique: true,
    },
    productName: {
      type: String,
      require: true,
    },
    quantity: {
      type: String,
      require: true,
    },
    remark: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bulk", BulkSchema);
