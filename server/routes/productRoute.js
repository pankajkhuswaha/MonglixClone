const express = require("express");
const {
    addProduct,
    getallProduct,
    deleteProduct,
    updateproduct,
} = require("../controller/productctrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/add", addProduct);
router.get("/", getallProduct);
router.delete("/", authMiddleware, isAdmin, deleteProduct);
router.post("/update", updateproduct);

module.exports = router;
