const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const PORT = 7006;
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const contactusRoute = require("./routes/contactRoute");
const blogRoute = require("./routes/blogRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const otpRoute = require("./routes/otproute");
const uploadimageRoute = require("./routes/uploadRoute");
const websiteRoute = require("./routes/websiteRoute");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");


mongoose.set("strictQuery", true);
dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: 50, extended: true }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/cart", cartRoute);
app.use("/api/otp", otpRoute);
app.use("/api/contact", contactusRoute);
app.use("/api/blog", blogRoute);
app.use("/api/product", productRoute);
app.use("/api/config", websiteRoute);
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use("/api/uploads", uploadimageRoute);

app.use(notFound);
app.use(errorHandler);
const os = require("os");

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server listening on http://127.0.0.1:${PORT}`);
});



const ipAddress = Object.values(os.networkInterfaces())
  .flat()
  .find(({ family, internal }) => family === "IPv4" && !internal).address;


// app.listen(PORT, ipAddress, () => {
//   console.log(`Server listening on http://${ipAddress}:${PORT}`);
// });


// MONGODB_URL='mongodb+srv://deepnapsoftech:123@cluster0.8nn2kfa.mongodb.net/main'
// PORT=8000
// JWT_SECRET='mysecretghfhcfhgvhgfhgfhgfhgfhgfhgfhg'
// MAIL_ID="enquiry@jhevmotors.com"
// MP='iuauykctaxogmapl'
// CLOUD_NAME="ddtu7csah"
// APIC_KEY=551747538882925
// SECRET_KEY=C8J14frunjAc8qZiGE7b2oK4PsM
// API_URL ='http://nimbusit.co.in/api/swsend.asp?'
// API_KEY ='t1dryishercs'
// API_SECRET ='70560242'
// SENDER_ID ='DPSTCH'
// SHIP_ROCKET_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXYyLnNoaXByb2NrZXQuaW4vdjEvZXh0ZXJuYWwvYXV0aC9sb2dpbiIsImlhdCI6MTY4OTkyMDg3NywiZXhwIjoxNjkwNzg0ODc3LCJuYmYiOjE2ODk5MjA4NzcsImp0aSI6IkIwdnlxREhYaHRLT2lyQXQiLCJzdWIiOjM3NjMzNDcsInBydiI6IjA1YmI2NjBmNjdjYWM3NDVmN2IzZGExZWVmMTk3MTk1YTIxMWU2ZDkifQ.HUMqjg0fWgoyXuLBpOfZBOQ6z87VaE1K230Ul2Z_Yv4'