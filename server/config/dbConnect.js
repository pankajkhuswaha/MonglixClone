const { default: mongoose } = require("mongoose");
require('dotenv').config();

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;

// MONGODB_URL='mongodb+srv://123:123@cluster0.rleoymi.mongodb.net/JHEV'
// # MONGODB_URL='mongodb+srv://123:123@cluster0.4fsmznz.mongodb.net/JHEVDummy'
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