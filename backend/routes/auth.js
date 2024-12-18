const express = require("express");
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

router.post("/register",async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        console.log(salt)
        const hashedPassword = await bcrypt.hash(req.body.password , salt);
        console.log(hashedPassword)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
            team:req.body.team,
            favCity:req.body.favCity
        })
        console.log(newUser)
        const user = await newUser.save();
        console.log(user)
        res.status(200).json(user);
    }   
    catch(err){
        res.status(500).json({msg:"something went wrong",error:err})
    }
})

router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({
            username:req.body.username
        })
        !user && res.status(403).json({msg:"wrong username"})
        const isPassword = await bcrypt.compare(req.body.password,user.password);
        !isPassword && res.status(401).json({msg:"wrong password"});
        const {password, ...others} = user._doc;
        const token = jwt.sign(
            others,
            jwtSecret,
            { expiresIn: "1h" }
        )
        res.cookie("token", token, {
            httpOnly: true, // Prevent JavaScript access to the cookie
            secure: process.env.NODE_ENV === "production", // Use only over HTTPS in production
            maxAge: 3600000, // Token expires in 1 hour
            //sameSite: "none", // Cross-site access is limited
          });
        res.status(200).json(others)
    }   
    catch(err){
        res.status(500).json({msg:"something went wrong",error:err})
    }
})
 
module.exports = router;