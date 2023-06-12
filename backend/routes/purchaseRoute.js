const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');

router.post('/buyproduct', async (req, res) => {
    const tempuser = await User.findOne({ _id: req.body.userid });
    const status = "Shipped";
    tempuser.bookeditems.push({ productname: req.body.product.name, productimg: req.body.product.imageurls[0], productprice: req.body.product.price, delstatus: status });
    await tempuser.save();
})
router.post('/bookeddetails', async (req, res) => {
    const tempuser = await User.findOne({ _id: req.body.userid });
    res.send(tempuser);
})
router.post('/addtocart', async (req, res) => {
    const tempuser = await User.findOne({ _id: req.body.userid });
    tempuser.productcart.push({ productid: req.body.product._id, productname: req.body.product.name, productimg: req.body.product.imageurls[0], productprice: req.body.product.price });
    await tempuser.save();
})
router.post('/cartdetails', async (req, res) => {
    const tempuser = await User.findOne({ _id: req.body.userid });
    res.send(tempuser);
})


router.post('/removeItem', async (req, res) => {
    const {productid,userid}=req.body;
    try {
        const user=await User.findOne({_id:userid});
        const items=user.productcart;
        const temp=items.filter(item=>item.productid.toString()!=productid);
        user.productcart=temp;
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
    }
})
router.post('/cancelOrder',async(req,res)=>{
    const {productname,userid}=req.body;
    try {
        const user=await User.findOne({_id:userid});
        const items=user.bookeditems;
        const temp=items.filter(item=>item.productname!=productname);
        user.bookeditems=temp;
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;