import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Payment from "./pages/payment/Payment";
import Auth from "./pages/Auth/Auth";
import Results from "./pages/results/Results";
import ProductDetail from "./pages/productdetails/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OrRLj012uRWa2wEnk1v1BrZmPjrcA9cxIfxngDoSpfJJaAtm9wqFplHRZBTZAZwntzrkmnYTr2H6OYz92q2ycO0007A7G7BoD"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/category/:category" element={<Results />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Routing;
