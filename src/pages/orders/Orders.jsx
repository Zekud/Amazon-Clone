import React, { useState, useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { db } from "../../Utilities/FirebaseConfig";
import { cartContext } from "../../components/ContextAPI/CartContext";
import ProductCard from "../../components/product/ProductCard";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import "./orders.scss";
function Orders() {
  const { state } = useContext(cartContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (state.user?.uid) {
      const colRef = collection(db, "users", state.user?.uid, "orders");
      const q = query(colRef, orderBy("created", "desc"));
      onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
    }
  }, [state.user?.uid]);
  return (
    <Layout>
      <section className="orders_section">
        <div className="orders_container">
          <h2 className="heading">Your Orders</h2>
          <div className="orders">
            {orders?.map((order) => {
              return (
                <div key={order.id} className="order">
                  <h3>Order Id: {order.id}</h3>
                  <div>
                    {order.data.basket?.map((item, index) => {
                      return <ProductCard data={item} key={index} />;
                    })}
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
