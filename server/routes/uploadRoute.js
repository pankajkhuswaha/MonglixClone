const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
  uploadPhoto,
  productImgResize,
  uploadImage,
} = require("../middlewares/uploadImage");
const multerError = require("../middlewares/multererror");
const router = express.Router();

router.post(
  "/",
  uploadPhoto.array("images", 10),
  multerError,
  productImgResize,
  uploadImage
);

module.exports = router;
