import React, { useRef } from 'react';

import CartMenuList from './CartMenuList';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import s from "./Nav.module.css";

export default function CartMenu({items, onShowCart}) {
    const ref = useRef(null);
    useOnClickOutside(ref, onShowCart);

    let cartMenu;
    if(items.length > 0) {
        cartMenu = <CartMenuList />
    } else {
        cartMenu = <span className={s.empty}>Your cart is empty.</span>;
    }

  return (
    <div className={s.cartMenuWrapper} ref={ref}>
        <div className={`${s.cartMenuHeader} ${s.item}`}>Cart</div>
        <div className={`${s.cartMenuContent} ${s.item}`}>
            {cartMenu}
        </div>
        {
            items.length > 0 && 
            <div className={`${s.cartMenuBtnWrapper}`}>
                <button className={`noBtn ${s.cartMenuBtn}`} type={`button`}>Checkout</button>
            </div>
        }
    </div>
  )
}
