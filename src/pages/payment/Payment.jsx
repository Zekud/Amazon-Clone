import React, { useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import { cartContext } from "../../components/ContextAPI/CartContext";
import ProductCard from "../../components/product/ProductCard";
import "./payment.scss";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormatter from "../../components/currencyFormater/CurrencyFormatter";
function Payment() {
  const [CardError, setCardError] = useState(null);
  const { state } = useContext(cartContext);
  const total = state.basket?.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = state.basket?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCardChange = (event) => {
    setCardError(event.error ? event.error.message : "");
  };
  return (
    <Layout>
      {/*header*/}
      <div className="header">Checkout ({total}) items</div>
      <section>
        <div className="delivery">
          <h3>Delivery Address</h3>
          <div>
            <p>{state.user?.email}</p>
            <p>123 Fake Street</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <hr />
        <div className="review">
          <h3>Review Items</h3>
          <div>
            {state.basket?.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </div>
        </div>
        <hr />
        <div className="payment">
          <h3>Payment Method</h3>
          <div className="payment-container">
            <form action="">
              {CardError && <small style={{ color: "red" }}>{CardError}</small>}
              <CardElement onChange={handleCardChange} />
              <div>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  Total Price: <CurrencyFormatter amount={totalPrice} />
                </p>
              </div>
              <button>Pay now</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
