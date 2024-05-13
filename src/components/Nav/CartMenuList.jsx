import React from 'react';

import useMyContext from '../../hooks/useMyContext';
import CartContext from '../../context/cart-context';
import DeleteIcon from '../../icons/DeleteIcon';
import { getPrice } from '../../helpers/utils';

import s from "./Nav.module.css";

export default function CartMenuList() {
    const {items, totalAmount, onDelete, removeItem} = useMyContext(CartContext);

  return (
    <ul className={`noList ${s.cartMenuListWrapper}`}>
      {
        items.map( (item, i) => {
            return (
                <li className={s.cartMenuListItem} key={i}>
                    <span className={s.itemImg}><img src={item.img.thumb} /></span>
                    <span className={s.itemInfo}>
                        {item.name}
                        <span className={s.itemPrice}>
                            {getPrice(item.currentPrice)} x {item.qt} <span>{getPrice(totalAmount)}</span>
                        </span>
                    </span>
                    <span className={s.itemDelete} onClick={()=>removeItem({item, subtype: 'rmv'})}>
                        <DeleteIcon />
                    </span>
                </li>
            )
        })
      }
    </ul>
  )
}
