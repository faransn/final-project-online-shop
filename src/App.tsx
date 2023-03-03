import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import CartProvider from "./store/Cart/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Home />
    </CartProvider>
  );
}

export default App;
