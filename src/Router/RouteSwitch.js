import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ItemPurchase from "../Components/ItemPurchase";
import { ShopContextProvider } from "../Components/Context";

export default function RouteSwitch() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item" element={<ItemPurchase />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}
