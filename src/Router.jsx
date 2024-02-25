import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Payment from "./pages/payment/Payment";
import Auth from "./pages/Auth/Auth";
import Results from "./pages/results/Results";
import ProductDetail from "./pages/productdetails/ProductDetail";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/category/:category" element={<Results />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Routing;
