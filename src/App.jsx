import React from "react";
import Nav from "./components/Nav/Nav";
import ProductDisplay from "./components/ProductDisplay";
import ProductInfo from "./components/ProductInfo";
import CartAction from "./components/Cart/CartAction";

import s from "./App.module.css";

function App() {
  return (
    <>
      <header className={`container ${s.header}`}>
        <Nav />
      </header>
      <main className={`container`}>
        <div className={`${s.productInfoWrapper}`}>
          <ProductDisplay />
          <ProductInfo />
          <CartAction />
        </div>
      </main>
    </>
  );
}

export default App;
