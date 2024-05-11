import React, { useState } from "react";

import AddToCart from "./AddToCart";
import CartIncrement from "./CartIncrement";

import s from './Cart.module.css';

export default function CartAction({item}) {
  const [incDefault, setIncDefault] = useState(0);
  const [incAction, setIncAction] = useState(null);

  return (
    <div className={s.cartActionWrapper}>
      <CartIncrement inc={incDefault} onInc={setIncDefault} onIncAct={setIncAction} />
      <AddToCart item={item} quantity={incDefault} action={incAction} />
    </div>
  );
}
