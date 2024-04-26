import React from 'react';

import s from './Cart.module.css';

export default function AddToCart() {
  return (
    <button className={s.addToCartBtn}>
        <span className={s.cartIcon}>
            <img src="/icon-cart.svg" alt="" />
        </span>
        <span>Add to cart</span>
    </button>
  )
}
