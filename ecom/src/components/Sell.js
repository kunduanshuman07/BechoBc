import React, { useState } from 'react'
import "./Sell.css";
import axios from "axios";
import Navbar from "./Navbar";
function Sell() {
    const [category, setCategory] = useState();
    const [name, setName] = useState('');
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [description, setDescription] = useState();
    const [imageurl1, setimgurl1] = useState();
    const [imageurl2, setimgurl2] = useState();
    const [imageurl3, setimgurl3] = useState();
    const [maxcount, setMaxcount] = useState();
    const [price, setPrice] = useState();
    function addproduct() {
        const product = {
            category, name, city, state, description, imageurls: [imageurl1, imageurl2, imageurl3], maxcount, price
        }
        try {
            const data = (axios.post('/api/products/addproduct', product)).data;

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
        <Navbar/>
            <div className='sell'>
                <form>
                    <h1>Provide Product Details</h1>
                    <input type='text' placeholder='Category' value={category} onChange={(e) => { setCategory(e.target.value) }} />
                    <input type='text' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type='text' placeholder='City' value={city} onChange={(e) => { setCity(e.target.value) }} />
                    <input type='text' placeholder='State' value={state} onChange={(e) => { setState(e.target.value) }} />
                    <input type='text' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <input type='text' placeholder='Image Url' value={imageurl1} onChange={(e) => { setimgurl1(e.target.value) }} />
                    <input type='text' placeholder='Image Url' value={imageurl2} onChange={(e) => { setimgurl2(e.target.value) }} />
                    <input type='text' placeholder='Image Url' value={imageurl3} onChange={(e) => { setimgurl3(e.target.value) }} />
                    <input type='number' placeholder='Stock' value={maxcount} onChange={(e) => { setMaxcount(e.target.value) }} />
                    <input type='number' placeholder='Price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
                    <button onClick={addproduct}>List this Product</button>
                </form>
            </div>
        </>
    )
}

export default Sell