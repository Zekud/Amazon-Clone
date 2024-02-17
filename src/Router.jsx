import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Payment from "./pages/payment/Payment";
import SignIn from "./pages/Auth/SignIn";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auth" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default Routing;
