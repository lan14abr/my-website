import React, { useState } from "react";
import "./OrderingPage.css";
import Produce from "./produce.json";
import { v4 as uuid } from "uuid";

const OrderingPage = () => {
  const [selectedItems, setSelectedItems] = useState({
    Base: null,
    Meat: null,
    Sauce: null,
    Extras: [],
    Vegetable: [],
  });

  const handleCheckboxChange = (category, itemName) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = { ...prevSelectedItems };

      if (category === "Extras" || category === "Vegetable") {
        const isAlreadySelected =
          prevSelectedItems[category].includes(itemName);
        if (isAlreadySelected) {
          newSelectedItems[category] = prevSelectedItems[category].filter(
            (item) => item !== itemName
          );
        } else {
          newSelectedItems[category] = [
            ...prevSelectedItems[category],
            itemName,
          ];
        }
      } else {
        newSelectedItems[category] =
          prevSelectedItems[category] === itemName ? null : itemName;
      }

      return newSelectedItems;
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    Object.keys(selectedItems).forEach((category) => {
      const items = selectedItems[category];
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

  const handlePlaceOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: uuid(),
      items: selectedItems,
      totalPrice: calculateTotalPrice(),
    };
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));
    alert("Your order has been placed!");
    setSelectedItems({
      Base: null,
      Meat: null,
      Sauce: null,
      Extras: [],
      Vegetable: [],
    });
  };

  return (
    <div className="ordering-page">
      <div className="title">Create your salad</div>
      {Produce.produce.map((category) => (
        <div key={category.category} className="category-section">
          <div className="category-box">
            <h2>{category.category}</h2>
            {category.items.map((item) => (
              <div className="grid-item" key={item.name}>
                <label>
                  <input
                    type="checkbox"
                    checked={
                      category.category === "Extras" ||
                      category.category === "Vegetable"
                        ? selectedItems[category.category].includes(item.name)
                        : selectedItems[category.category] === item.name
                    }
                    onChange={() =>
                      handleCheckboxChange(category.category, item.name)
                    }
                  />
                  {item.name} - {item.price_sek} SEK
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="summary-section">
        <h2>Total Price: {calculateTotalPrice()} SEK</h2>
        <button className="order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderingPage;
