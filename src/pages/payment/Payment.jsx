import React, { useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import { cartContext } from "../../components/ContextAPI/CartContext";
import ProductCard from "../../components/product/ProductCard";
import "./payment.scss";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormatter from "../../components/currencyFormater/CurrencyFormatter";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../Utilities/FirebaseConfig";
import { setDoc, doc } from "firebase/firestore";
function Payment() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [CardError, setCardError] = useState(null);
  const { state, dispatch } = useContext(cartContext);
  const [processing, setProcessing] = useState(false);
  const total = state.basket?.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = state.basket?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCardChange = (event) => {
    setCardError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      await fetch(
        `https://amazon-api-deploy-esqf.onrender.com/payment/create?total=${
          totalPrice * 100
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then(async (data) => {
          const confirmation = stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });

          await confirmation.then((result) => {
            if (result.error) {
              setCardError(result.error.message);
            } else {
              setDoc(
                doc(
                  db,
                  "users",
                  state.user?.uid,
                  "orders",
                  result.paymentIntent.id
                ),
                {
                  basket: state.basket,
                  amount: result.paymentIntent.amount,
                  created: result.paymentIntent.created,
                }
              );
              console.log("success");
              dispatch({ type: "CLEAR_BASKET" });
            }
          });
        });

      setProcessing(false);
      navigate("/orders");
    } catch (err) {
      console.error(err);
      if (totalPrice === 0) {
        setCardError("there is no item in the cart");
      } else {
        setCardError("something went wrong");
      }
      setProcessing(false);
    }
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
            <form onSubmit={handleSubmit}>
              {CardError && <small style={{ color: "red" }}>{CardError}</small>}
              <CardElement onChange={handleCardChange} />
              <div>
                <p style={{ display: "flex", justifyContent: "space-between" }}>
                  Total Price: <CurrencyFormatter amount={totalPrice} />
                </p>
              </div>
              <button type="submit" disabled={processing || !stripe}>
                {processing ? (
                  <ClipLoader color="#36d7b7" size={12} />
                ) : (
                  "Pay Now"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
