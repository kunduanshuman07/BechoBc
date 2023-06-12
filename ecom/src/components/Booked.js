import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import axios from "axios";
import "./Booked.css";

function Booked() {
  const currentUser = localStorage.getItem('currentUser');
  const userid = currentUser ? JSON.parse(currentUser)._id : null;
  const [tempUser, setTempUser] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const userDetails = {
          userid
        }
        const data = (await axios.post('/api/purchase/bookeddetails', userDetails)).data;
        setTempUser(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [userid])
  async function removeItem(item) {
    const removalDetail = {
      productname: item.productname,
      userid
    }
    const data = (await axios.post('/api/purchase/cancelOrder', removalDetail)).data;
  }
  return (
    <>
      <Navbar />
      <div className='booked'>
        {tempUser?.bookeditems?.map(item => (
          <div className="bookedCart" key={item._id}>
            <div className="bookedItems">
              <img src={item.productimg} alt="prodImg" className='productImage' />
              <hr />
              <h3>Product Name : {item.productname}</h3>
              <hr />
              <p>Delivery Status : {item.delstatus}</p>
              <hr />
              <p>Expected Delivery : Monday</p>
              <hr />
              <h4>Item Price : INR {item.productprice}.00</h4>
              <button style={{ float: 'right', color: 'white', background: 'black' }} onClick={() => removeItem(item)}>Cancel Order</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Booked
