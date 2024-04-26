import React from "react";

import AddToCart from "./AddToCart";
import CartIncrement from "./CartIncrement";

export default function CartAction() {
  return (
    <div className={`cartActionWrapper`}>
      <CartIncrement />
      <AddToCart />
    </div>
  );
}
