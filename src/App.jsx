import React from "react";
import Nav from "./components/Nav/Nav";
import ProductDisplay from "./components/ProductDisplay";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className={`productInfoWrapper`}>
          <ProductDisplay />
          <div className="productInfo"></div>
        </div>
      </main>
    </>
  );
}

export default App;
