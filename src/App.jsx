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
      <footer className={`container`}>
        <span><span className={s.copy}>&copy;</span>2024 - Project Solution by <a href="https://thehelpfultipper.github.io/kleamerkuri/" target="_blank">Klea Merkuri</a> for <a href="https://thehelpfultipper.com/" target="_blank">THT</a>. All Rights Reserved.</span>
      </footer>
    </CartProvider>
  );
}

export default App;
