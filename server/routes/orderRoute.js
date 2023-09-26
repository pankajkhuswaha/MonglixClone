const express = require("express");
const router = express.Router();
const {
  getOrder,
  createOrder,
  updateOrder,
  removeOrder,
} = require("../controller/orderCtrl");

router.get("/", getOrder);
router.post("/", createOrder);
router.put("/:orderId", updateOrder);
router.delete("/:orderId", removeOrder);

module.exports = router;
