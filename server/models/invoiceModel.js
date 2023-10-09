const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  invoiceNo: {
    type: String,
    required: true,
  },
  products: {
    type: String,
    required: true,
  },
  invoice:{
    type:String
  },
  total: {
    type: String,
    required: true,
  },
});

const OTP = mongoose.model('invoice', otpSchema);

module.exports = OTP;



