import React from "react";
import "../components/ItemsShop.css";
import { Link, Outlet } from "react-router-dom";

function ItemsShop(props) {
  return (
    <div>
      <itemsShop className="itemsShop">
        <li className="nav-item">
          <Link to="productPage" className="nav-link">
            Products
          </Link>
        </li>
        <a href="*" className="company">
          Items shop
        </a>
        <li className="nav-item">
          <Link to="cart" className="nav-link">
            Cart
          </Link>
        </li>
      </itemsShop>
      <Outlet />
    </div>
  );
}

export default ItemsShop;
