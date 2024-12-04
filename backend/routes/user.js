const express = require("express");
const router = express.Router();
const User =require("../models/User");


//specific product
router.post("/user", async(req,res)  =>{
    const {userId , favCity}=req.body;
    try{
    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { favCity },
        { new: true } // Return the updated document
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "City updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error updating city:", error);
      res.status(500).json({ message: "Server error" });
    }
});



module.exports = router;