import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { cartContext } from "../../components/ContextAPI/CartContext";
import ProductCard from "../../components/product/ProductCard";
import CurrencyFormatter from "../../components/currencyFormater/CurrencyFormatter";
import "./cart.scss";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Cart() {
  const { state, dispatch } = useContext(cartContext);
  const total = state.basket?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  function increment(item) {
    dispatch({
      type: "Add_To_Cart",
      item,
    });
  }
  function decrement(id) {
    dispatch({ type: "Decrement", id });
  }
  return (
    <Layout>
      <section className="cart-container">
        <div className="cart-container-wrapper">
          <h1>Hello {state.user?.email.split("@")[0]}</h1>
          <h3>Your shopping cart basket</h3>
          <hr />
          {state.basket?.length == 0 ? (
            <p>Your cart is empty, start adding items!</p>
          ) : (
            state.basket?.map((item, index) => (
              <section key={index} className="cart-card">
                <ProductCard data={item} showDescription={true} />
                <div className="quantity">
                  <button className="btn" onClick={() => increment(item)}>
                    <IoIosArrowUp />
                  </button>
                  <span>{item.quantity}</span>
                  <button className="btn" onClick={() => decrement(item.id)}>
                    <IoIosArrowDown />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>
        {state.basket.length != 0 && (
          <div className="subtotal">
            <div className="subtotal-wrapper">
              <p>Subtotal : ({state.basket.length} items)</p>
              <CurrencyFormatter amount={total} />
            </div>
            <span>
              <input type="checkbox" name="hasgift" id="hasgift" />
              <label htmlFor="hasgift">This order contains a gift</label>
            </span>
            <Link to="/payment">Proceed to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
