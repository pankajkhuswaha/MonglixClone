const express = require("express");

const {
  authMiddleware,
  isAdmin,
  isSuper,
} = require("../middlewares/authMiddleware");
const { getOrders, getAdminProduct, editOrderStatus } = require("../controller/orderCtrl");

const router = express.Router();
router.get("/",authMiddleware, getOrders);
router.get("/admin",authMiddleware,isAdmin, getAdminProduct);
router.post("/",authMiddleware,isAdmin, editOrderStatus);
module.exports = router;
