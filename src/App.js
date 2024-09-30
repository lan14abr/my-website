import React from "react";
import Navbar from "./components/Navbar.jsx";
import FoodOrdering from "./components/FoodOrdering.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from ".//components/Home.jsx";
import ItemsShop from "./components/ItemsShop.jsx";
import CV from "./components/CV.jsx";
import OrderingPage from "./components/FoodOrderingComponents/OrderingPage.jsx";
import ShoppingCart from "./components/FoodOrderingComponents/ShoppingCart.jsx";
import MapPage from "./components/Map/MapPage.jsx";
import SortingPage from "./components/Algorithms/SortingPage.jsx";
import ProductPage from "./components/ItemsShopComponents/ProductPage.jsx";
import Cart from "./components/ItemsShopComponents/Cart.jsx";
import ProductDetail from "./components/ItemsShopComponents/ProductDetail.jsx";

//https://www.youtube.com/watch?v=Law7wfdg_

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sortingPage" element={<SortingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/itemsshop" element={<ItemsShop />}>
            <Route index element={<ProductPage />} />
            <Route path="productPage" element={<ProductPage />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/foodOrdering" element={<FoodOrdering />}>
            <Route index element={<OrderingPage />} />
            <Route path="orderingPage" element={<OrderingPage />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
          </Route>
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
