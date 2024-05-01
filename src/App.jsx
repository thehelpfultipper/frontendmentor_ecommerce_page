import React from "react";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product";
import CartProvider from "./context/CartProvider";
import LightboxProvider from "./context/LightboxProvider";

import s from "./App.module.css";

function App() {
  return (
    <CartProvider>
      <header className={`container ${s.header}`}>
        <Nav />
      </header>
      <main className={`container`}>
        <div className={`${s.productInfoWrapper}`}>
          <LightboxProvider>
            <Product />
          </LightboxProvider>
        </div>
      </main>
    </CartProvider>
  );
}

export default App;
