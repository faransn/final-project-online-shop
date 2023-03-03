import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default Router;
