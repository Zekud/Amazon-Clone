import React from "react";
import { IoMenu } from "react-icons/io5";
function LowerHeader() {
  return (
    <div className="lower-header-wrapper">
      <ul className="lower-header-container">
        <li>
          <div>
            <IoMenu />
            <span>All</span>
          </div>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
