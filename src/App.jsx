import React from "react";
import Nav from "./components/Nav/Nav";
import ProductDisplay from "./components/ProductDisplay";

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
          <div className="productInfo"></div>
        </div>
      </main>
    </>
  );
}

export default App;
