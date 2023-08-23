const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    bannerimg:{
      type:String
    },
    specs: {
      Motor_Type_and_Power: String,
      Controller_Type: String,
      Speedo_Meter: String,
      Battery_Capacity: String,
      Tyre_Specification_F_and_R: String,
      Suspension_F_and_R: String,
      Break_F_and_R: String,
    },

    feature: {
      speed: String,
      Total_Range: String,
      Charging_Time: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
