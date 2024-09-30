import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((product) => product.category))
        );
        setCategories(["all", ...uniqueCategories]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-page">
      <div className="container">
        <nav className="sidebar">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </nav>
        <main className="product-grid">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/itemsshop/product/${product.id}`}
              className="product-link"
            >
              <div className="product">
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // Förhindra standardbeteende
                      addToCart(product); // Lägg till produkten i varukorgen
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ProductPage;
