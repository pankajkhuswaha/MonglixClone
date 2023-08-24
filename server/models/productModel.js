const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    subItems:{
      type: String,
    },
    brand: {
      type: String,
    },
    itemCode: {
      type: String,
    },
    hsnCode: {
      type: String,
    },
    perpiece: {
      type: String,
    },
    unitMeausrement: {
      type: String,
    },
    meausrement: {
      type: String,
    },
    retaildiscount: {
      type: String,
      validate: {
        validator: function (value) {
          return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) >= 0 && parseFloat(value) <= 100;
        },
        message: props => `${props.value} is not a valid discount percentage.`,
      },
    },
    silverdiscount: {
      type: String,
      validate: {
        validator: function (value) {
          return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) >= 0 && parseFloat(value) <= 100;
        },
        message: props => `${props.value} is not a valid discount percentage.`,
      },
    },
    golddiscount: {
      type: String,
      validate: {
        validator: function (value) {
          return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) >= 0 && parseFloat(value) <= 100;
        },
        message: props => `${props.value} is not a valid discount percentage.`,
      },
    },
    platinumdiscount: {
      type: String,
      validate: {
        validator: function (value) {
          return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) >= 0 && parseFloat(value) <= 100;
        },
        message: props => `${props.value} is not a valid discount percentage.`,
      },
    },
    mindiscription:{
      type:String
    },
    datasheet:{
      type:String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
