import React, { useState, useEffect } from 'react'
import "./Cart.css";
import axios from "axios";
import Navbar from './Navbar';
function Cart() {
    const currentUser = localStorage.getItem('currentUser');
    const userid = currentUser ? JSON.parse(currentUser)._id : null;
    const [tempUser, setTempUser] = useState();
    useEffect(() => {
        async function fetchData() {
            try {
                const userDetails = {
                    userid
                }
                const data = (await axios.post('/api/purchase/cartdetails', userDetails)).data;
                setTempUser(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [userid])
    async function removeItem(item){
        const removalDetail={
            productid:item.productid,
            userid
        }
        const data=(await axios.post('/api/purchase/removeItem',removalDetail)).data;
    }
    return (
        <>
            <Navbar />
            <div className='cart'>
                {tempUser?.productcart?.map(item => (
                    <div className="cartCard" key={item._id}>
                        <div className="cartItems">
                            <img src={item.productimg} alt="prodImg" className='productImage' />
                            <hr />
                            <h3>Product Name : {item.productname}</h3>
                            <hr />
                            <h4>Item Price : INR {item.productprice}.00</h4>
                            <button style={{ float: 'right', color: 'white', background: 'black' }} onClick={() => removeItem(item)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart