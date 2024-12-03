const express = require("express");
const router = express.Router();
const Product =require("../models/Product");


//specific product
router.get("/product/:id", async(req,res)  =>{
    try{
        const products  = await Product.findById(req.params.id);
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err)
    }
});


//all products

router.get("/product/", async(req,res)  =>{
    try{
        const products  = await Product.find();
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;