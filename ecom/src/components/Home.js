import React from 'react'
import "./Home.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Navbar />
      <div class="content">
        <h1>Welcome to Becho BC!</h1>
        <hr />
        <p>Welcome to our website! We are dedicated to providing high-quality products and exceptional customer service to our clients. Our company specializes in [insert industry/niche], and we take pride in offering a wide range of options to suit the diverse needs of our customers. Whether you are a [insert target audience], or simply looking for [insert product/service], we have something to offer you. We believe in building lasting relationships with our clients, and that is why we go above and beyond to ensure your satisfaction. Browse through our website to learn more about what we have to offer, and do not hesitate to contact us if you have any questions or concerns. Thank you for choosing us!</p>
        <Link to='/register'>
          <button>Get Started</button>
        </Link>
      </div>
    </>
  )
}

export default Home