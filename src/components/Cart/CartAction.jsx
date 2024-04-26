import React from "react";

import AddToCart from "./AddToCart";
import CartIncrement from "./CartIncrement";

import s from './Cart.module.css';

export default function CartAction() {
  return (
    <div className={s.cartActionWrapper}>
      <CartIncrement />
      <AddToCart />
    </div>
  );
}
