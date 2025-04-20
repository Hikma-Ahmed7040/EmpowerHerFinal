import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Signup from '../pages/Auth/Signup'
import Payment from '../pages/Payment/Payment'
import Orders from '../pages/Orders/Order'
import Cart from '../pages/Cart/cart'
// import Result from '../pages/Results/Result.jsx'
import Result from '../pages/Results/Result.jsx'

function Routing() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Signup />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/banner/:bannerName" element={<Result />} />

    </Routes>
  )
}

export default Routing ;
