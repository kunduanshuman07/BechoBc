const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageurls:[],
    maxcount:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const productModel=mongoose.model('products',productSchema);
module.exports=productModel;