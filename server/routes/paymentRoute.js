const express = require("express");
const { initializePayment, checkPaymentStatus } = require("../controller/paymentCtrl");
const { createOrder, checkUser } = require("../controller/orderCtrl");

const router = express.Router();
router.post("/cod", checkUser, createOrder);
router.post("/pay", initializePayment);
router.post("/check", checkPaymentStatus,createOrder);


module.exports = router;
