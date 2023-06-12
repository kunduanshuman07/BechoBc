import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './components/Home';
import Products from "./components/Products";
import Registerscreen from './screens/registerscreen';
import Loginscreen from './screens/loginscreen';
import Purchasescreen from './screens/purchasescreen';
import Booked from "./components/Booked";
import Cart from "./components/Cart";
import Sell from "./components/Sell";
import Profile from './components/Profile';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Registerscreen/>} />\
          <Route path="/login" element={<Loginscreen/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/sell" element={<Sell/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/booked" element={<Booked/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/product/:productid" element={<Purchasescreen/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App