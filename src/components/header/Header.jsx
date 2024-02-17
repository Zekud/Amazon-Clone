import React from "react";
import "./header.scss";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import cart from "../../assets/cart.png";
function Header() {
  return (
    <>
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
          <a href="#" className="sign-in-link">
            <span>Hello, Sign in</span>
            <span>Account & Lists</span>
          </a>
          <a href="#" className="orders-link">
            <span>Returns</span>
            <span>& Orders</span>
          </a>
          <a href="#" className="cart">
            <div className="cart-wrapper">
              <img src={cart} alt="cart" />
              <span>0</span>
            </div>
            <span>Cart</span>
          </a>
        </div>
      </section>
      <section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
