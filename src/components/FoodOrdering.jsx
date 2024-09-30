import React from "react";
import "../components/FoodOrdering.css";
import { Link, Outlet } from "react-router-dom";

function FoodOrdering() {
  return (
    <div>
      <foodOrdoring className="foodOrdering">
        <li className="nav-item">
          <Link to="orderingPage" className="nav-link">
            New order
          </Link>
        </li>
        <Link to="orderingPage" className="company">
          Bibimbap shop
        </Link>
        <li className="nav-item">
          <Link to="shoppingCart" className="nav-link">
            Shopping cart
          </Link>
        </li>
      </foodOrdoring>
      <Outlet />
    </div>
  );
}

export default FoodOrdering;
