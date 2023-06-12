import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./purchasescreen.css";
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
function Purchasescreen() {
  const currentUser = localStorage.getItem('currentUser');
  const user = currentUser ? JSON.parse(currentUser) : null;
  const userid = user != null ? user._id : null;
  let { productid } = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [product, setProducts] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.post('/api/products/getproductbyid', { productid: productid })).data;
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
        setError(false);
      }
    }

    fetchData();
  }, [])
  async function onToken() {
    const productDetails = {
      product,userid
    }
    try {
      const result=await axios.post('/api/purchase/buyproduct',productDetails);
    } catch (error) {
      console.log(error);
    }
  }
  async function addtocart(){
    const productDetails = {
      product,userid
    }
    try {
      const result=await axios.post('/api/purchase/addtocart',productDetails);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      {loading ? <h1>Loading...</h1> : error ? <h1>Error...</h1> :
        (
          <div className="productDetails">
            <h2>{product.name}</h2>
            <div className="productImages">

              {product.imageurls && product.imageurls.map((image, index) => (
                <img key={index} src={image} alt={`Product Image ${index}`} />
              ))}

            </div>
            <div className="productInfo">
              <div className='leftColumn'>
                <p>{product.description}</p>
              </div>
              <div className='rightColumn'>
                <p>Category: {product.category}</p>
                <p>Price: INR {product.price}.00</p>
                <p>Stocks : {product.maxcount}</p>
                <p>Region : {product.city},{product.state}</p>
              </div>
            </div>
            {currentUser ? (<><div className='productCart'>
              <Link to={'/cart'}>
                <button onClick={addtocart}>Add to Cart</button>
              </Link>
            </div>
              <div className='productBuyButton'>
                <StripeCheckout
                  amount={product.price * 100}
                  token={onToken}
                  currency='INR'
                  stripeKey="pk_test_51Mt8OASG8PjB3QXH5CI2RE23R7ygsLgXZovU6Jwn8Yv6ch3ewPqCzbvYVUe9n5NueO8WxhtYWCbIj1I089ABZuhv00ANE83UQ8"
                />
              </div></>) : (<Link to={'/login'}>
                <button>Login to Buy</button>
              </Link>)}
          </div>)}
    </div>

  )
}

export default Purchasescreen