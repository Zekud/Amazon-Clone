import React, { useContext } from "react";
import "./header.scss";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import cart from "../../assets/cart.png";
import { cartContext } from "../ContextAPI/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Utilities/FirebaseConfig";

function Header() {
  const { state } = useContext(cartContext);
  const totalItems = state.basket.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="whole-header">
      <section className="nav-main-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className="location">
            <CiLocationOn />
            <div className="loc-wrapper">
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="nav-fill">
          <div className="nav-fill-wrapper">
            <select name="" id="">
              <option value="All">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <span>
              <IoSearchSharp />
            </span>
          </div>
        </div>
        <div className="nav-right">
          <a href="#" className="language">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
              alt="flag"
            />
            <div className="lang-wrapper">
              <span>EN</span>
              <MdOutlineArrowDropDown />
            </div>
          </a>
          <Link to={!state.user && "/auth"} className="sign-in-link">
            {state.user ? (
              <>
                <span>Hello, {state.user?.email.split("@")[0]}</span>
                <span onClick={() => signOut(auth)}>Sign Out</span>
              </>
            ) : (
              <>
                <span>Hello, Sign in</span>
                <p>Account & Lists</p>
              </>
            )}
          </Link>
          <Link to="/orders" className="orders-link">
            <span>Returns</span>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className="cart">
            <div className="cart-wrapper">
              <img src={cart} alt="cart" />
              <span>{totalItems}</span>
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </section>
      <section>
        <LowerHeader />
      </section>
    </section>
  );
}

export default Header;
