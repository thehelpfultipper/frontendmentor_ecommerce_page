import React from 'react';

import CartIcon from '../../icons/CartIcon';
import useMyContext from '../../hooks/useMyContext';
import CartContext from '../../context/cart-context'; 

import s from './Cart.module.css';

export default function AddToCart({item, quantity, action}) {
  const {addItem, removeItem} = useMyContext(CartContext);

  const addToCartHandler = () => {
    const newItem = {...item, qt: quantity};
    if(action === 'inc') {
      addItem(newItem);
    } else if(action === 'dec') {
      removeItem(newItem);
    } else {
      return;
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
