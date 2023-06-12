const express=require('express');
const dbConfig=require('./db/connection');
const userRoute=require('./routes/userRoute');
const productRoute=require('./routes/productRoute');
const purchaseRoute=require('./routes/purchaseRoute');
const app=express();
app.use(express.json());
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/purchase',purchaseRoute);
const port=process.env.port||5000;
app.listen(port,()=>{
    console.log("Server started at port",port);
})