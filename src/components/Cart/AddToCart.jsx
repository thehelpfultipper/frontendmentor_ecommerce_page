import React, { useEffect, useState } from 'react';

import CartIcon from '../../icons/CartIcon';
import useMyContext from '../../hooks/useMyContext';
import CartContext from '../../context/cart-context'; 

import s from './Cart.module.css';

export default function AddToCart({item, quantity, action}) {
  const {items, addItem, removeItem} = useMyContext(CartContext);

  const addToCartHandler = () => {
    if(quantity === 0) return;

    const newItem = {...item, qt: quantity};
        
    if(action === 'inc') {
      addItem(newItem);
    } else if(action === 'dec') {
      if(items.length > 0) {
        removeItem({item: newItem, subtype: 'dec'});
      } else {
        addItem(newItem);
      }
    } 
  }

  return (
    <button className={`noBtn ${s.addToCartBtn}`} onClick={addToCartHandler}>
        <span className={s.cartIcon}>
            <CartIcon fill={`#fff`} />
        </span>
        <span>Add to cart</span>
    </button>
  )
}
