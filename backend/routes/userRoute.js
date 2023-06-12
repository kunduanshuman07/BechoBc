const express=require('express');
const router=express.Router();
const User=require('../models/usermodel');

router.post('/register',async(req,res)=>{
    const newuser=new User({name:req.body.name,email:req.body.email,password:req.body.password,phone:req.body.phone,city:req.body.city,state:req.body.state,pincode:req.body.pincode,about:req.body.about});
    try {
        const user= await newuser.save();
        res.send(`User Registered Successfully!`);
    } catch (error) {
        res.status(400).send(`Error`);
    }
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email:email,password:password});
        if(user){
            res.send(user);
        }
        else{
            res.send(`Login failed`);
        }
    } catch (error) {
        res.status(400).send(`Error`);
    }
});

module.exports=router;