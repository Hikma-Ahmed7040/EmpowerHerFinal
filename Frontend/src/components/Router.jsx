import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Auth from '../pages/Auth/Auth.jsx'
import Payment from '../pages/Payment/Payment'
import Orders from '../pages/Orders/Order'
import Cart from '../pages/Cart/cart'
// import Result from '../pages/Results/Result.jsx'
import Result from '../pages/Results/Result.jsx'
import Product from '../components/Product/Product.jsx'
import AuthSeller from '../pages/AuthSeller/AuthSeller.jsx'
import Admin from '../pages/Admin/AdminDashboard.jsx'; // Import


function Routing() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path='/seller' element={<AuthSeller/>}/>
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/banner/:bannerName" element={<Result />} />
      <Route path="/category/:slug" element={<Product />} />
      


    </Routes>
  )
}

export default Routing ;
