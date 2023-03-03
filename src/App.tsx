import React from "react";
import CartProvider from "./store/Cart/CartProvider";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Router from "./router/Router";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
