import React from 'react';

import CartIcon from '../../icons/CartIcon';

import s from './Cart.module.css';

export default function AddToCart() {
  return (
    <button className={`noBtn ${s.addToCartBtn}`}>
        <span className={s.cartIcon}>
            <CartIcon fill={`#fff`} />
        </span>
        <span>Add to cart</span>
    </button>
  )
}
