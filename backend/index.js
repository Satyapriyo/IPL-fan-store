const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter =  require("./routes/auth")
const mongoose = require("mongoose");
const productsRoute = require("./routes/products")
const userRoute = require("./routes/user")


require("dotenv").config();
console.log(process.env.CORS_URL)

const corsOption = {
    origin:process.env.CORS_URL,
    credentials: true,
};
app.use(express.json());
app.use(cors(corsOption));


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("The database is connected 🚀🚀🚀")
}).catch((err)=>{
    console.log("Error connecting database 💀" + err)
})
app.use("/api/auth",authRouter);
app.use("/api",productsRoute);
app.use("/api",userRoute);

app.listen(5000,()=>{
    console.log("It's working !!")
})
app.get("/",(req,res)=>{
    res.send("The server is working FINE😊");
})