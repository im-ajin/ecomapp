import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Home from './pages/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.js'
import AboutUs from './pages/AboutUs.js'
import ContactUs from './pages/ContactUs.js'
import Cart from './pages/Cart.js'
import CartItems from './pages/CartItems.js'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/aboutus" element={<AboutUs />} />
     <Route path="/contactus" element={<ContactUs />} />
     <Route path="/cart/:id" element={<Cart />} />
     <Route path="/cartitems" element={<CartItems />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App