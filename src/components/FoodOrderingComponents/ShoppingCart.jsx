import React, { useEffect, useState } from "react";
import Produce from "./produce.json";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const calculateTotalPrice = (order) => {
    let total = 0;
    Object.keys(order.items).forEach((category) => {
      const items = order.items[category];
      if (Array.isArray(items)) {
        items.forEach((itemName) => {
          const categoryData = Produce.produce.find(
            (c) => c.category.toLowerCase() === category.toLowerCase()
          );
          if (categoryData) {
            const item = categoryData.items.find(
              (item) => item.name === itemName
            );
            if (item) total += item.price_sek;
          }
        });
      } else if (items) {
        const categoryData = Produce.produce.find(
          (c) => c.category.toLowerCase() === category.toLowerCase()
        );
        if (categoryData) {
          const item = categoryData.items.find((item) => item.name === items);
          if (item) total += item.price_sek;
        }
      }
    });
    return total;
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  if (orders.length === 0) {
    return <div className="is-empty">Your cart is empty</div>;
  }

  return (
    <div className="shopping-cart">
      <h2>Your Orders:</h2>
      {orders.map((order) => (
        <div key={order.id} className="order">
          <h3>
            {order.items.Base} and {order.items.Meat} bimbimbap
          </h3>
          <ul>
            <strong>Ingridients: </strong>
            {Object.entries(order.items).map(([category, items]) => (
              <li key={category}>
                {Array.isArray(items) ? items.join(", ") : items}
              </li>
            ))}
          </ul>
          <h3>Total Price: {calculateTotalPrice(order)} SEK</h3>
          <button onClick={() => handleDeleteOrder(order.id)}>
            Delete Order
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
