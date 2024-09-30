import React, { useState, useEffect } from "react";
import "../ItemsShopComponents/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (id) => {
    // Filtrera bort produkten som har det angivna id:t
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems); // Uppdatera varukorgens state

    // Uppdatera localStorage med den nya varukorgslistan
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
          </div>
          <span className="cart-item-price">${item.price}</span>
          <button
            className="remove-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
