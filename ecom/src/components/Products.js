import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import "./Products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.get('/api/products/getallproducts')).data;
        setProducts(data);
        setLoading(false);
      } catch (e) {
        setError(true);
        console.log(e);
        setError(false);
      }
    }
    fetchData();
  }, [])



  return (
    <>
      <Navbar />
      <div className="product">
        {loading ? (<h1>Loading.....</h1>) : error ? (<h1>Error</h1>) : (products.map(product => {
          return <div className="productCard">
            <img src={product.imageurls[0]} alt="prodImg" className='productImage' />
            <hr />
            <h2>{product.name}</h2>
            <hr />
            <p>Region : {product.city}, {product.state}</p>
            <hr />
            <h2>Price : INR {product.price}.00</h2>
            <Link to={`/product/${product._id}`}>
              <button style={{ float: 'right', color: 'white', background: 'black' }}>View Product</button>
            </Link>
          </div>;
        }))}




      </div>
    </>
  )
}
export default Products

