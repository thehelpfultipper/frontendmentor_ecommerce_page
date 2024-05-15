import React, { useState } from "react";

import * as assets from "../../assets/index.js";
import CartIcon from "../../icons/CartIcon.jsx";
import FullNavMenu from "./FullNavMenu.jsx";
import Hamburger from "./Hamburger.jsx";
import useMyContext from "../../hooks/useMyContext.jsx";
import CartContext from "../../context/cart-context.js";
import CartMenu from "./CartMenu.jsx";

import s from "./Nav.module.css";

export default function Nav() {
  const { items, totalQuantity } = useMyContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(!showCart);
  
  return (
    <nav className={`${s.navWrapper}`}>
      <div className={s.navLft}>
        <div className={s.logo}>
          <img
            src={assets.logo}
            alt="Company logo."
          />
        </div>
        <Hamburger />
        <FullNavMenu />
      </div>
      <div className={s.navRht}>
        <div className={s.cart} onClick={showCartHandler}>
          <CartIcon />
          {items.length > 0 && (
            <span className={s.cartIconCount}>{totalQuantity}</span>
          )}
        </div>
        {showCart && <CartMenu items={items} />}
        <div className={s.profile}>
          <img
            src={assets.avatar}
            alt="Profile image"
          />
        </div>
      </div>
    </nav>
  );
}
