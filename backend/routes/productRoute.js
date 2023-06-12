const express=require('express');
const router=express.Router();
const Product=require('../models/productmodel');
router.get('/getallproducts',async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(201).send(products);
    }
    catch(e){
        res.status(500).send(e);
    }

})
router.post('/getproductbyid',async(req,res)=>{
    const productid=req.body.productid;
    try{
        const product=await Product.findOne({_id:productid});
        res.status(201).send(product);
    }
    catch(e){
        res.status(500).send(e);
    }
})
router.post('/addproduct',async(req,res)=>{
   try {
    const newProduct=new Product(req.body);
    await newProduct.save();
    res.send('Product Added Successfully');
   } catch (error) {
     console.log(error)
   }
})
module.exports=router;