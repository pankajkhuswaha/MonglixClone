const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const PORT = 8009;
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const contactusRoute = require("./routes/contactRoute");
const bulkRoute = require("./routes/bulkRoute");
const blogRoute = require("./routes/blogRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const otpRoute = require("./routes/otproute");
const uploadimageRoute = require("./routes/uploadRoute");
const websiteRoute = require("./routes/websiteRoute");
const adminRoute = require("./routes/adminRoute");
const orderRoute = require("./routes/orderRoute");
const payRoute = require("./routes/paymentRoute");
const couponRoute = require("./routes/couponRoute");
const ccavReqHandler = require("./controller/ccavenue/ccavRequestHandler");
const ccavResHandler = require("./controller/ccavenue/ccavResponseHandler");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

mongoose.set("strictQuery", true);
dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/cart", cartRoute);
app.use("/api/otp", otpRoute);
app.use("/api/contact", contactusRoute);
app.use("/api/blog", blogRoute);
app.use("/api/bulk", bulkRoute);
app.use("/api/product", productRoute);
app.use("/api/admin", adminRoute);
app.use("/api/config", websiteRoute);
app.use("/api/order", orderRoute);
app.use("/api/payment", payRoute);
app.use("/api/coupon", couponRoute);
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use("/api/uploads", uploadimageRoute);

app.use(express.static("public"));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

app.get("/about", function (req, res) {
  res.render("dataFrom.html");
});

app.post("/ccavRequestHandler", function (request, response) {
  ccavReqHandler.postReq(request, response);
});


app.use(notFound);
app.use(errorHandler);
const os = require("os");

// const ipAddress = Object.values(os.networkInterfaces())
//   .flat()
//   .find(({ family, internal }) => family === "IPv4" && !internal).address;

// app.listen(PORT, ipAddress, () => {
//   console.log(`Server listening on http://${ipAddress}:${PORT}`);
// });

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server listening on http://${"127.0.0.1"}:${PORT}`);
});
