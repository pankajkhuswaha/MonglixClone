const mongoose = require("mongoose");
const WebsiteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
    },
    mainbg: {
      type: String,
      required: true,
    },
    primarybg: {
      type: String,
      required: true,
    },
    secondarybg: {
      type: String,
      required: true,
    },
    homepageBanner: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("website", WebsiteSchema);
