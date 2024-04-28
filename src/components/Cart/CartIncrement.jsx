import React from 'react';

import s from './Cart.module.css';

export default function CartIncrement() {
  return (
    <div className={s.cartIncrementWrapper}>
        <button className={`${s.incBtn} noBtn`}><img src="/icon-minus.svg" alt="" /></button>
        <span className={s.cartQt}>0</span>
        <button className={`${s.incBtn} noBtn`}><img src="/icon-plus.svg" alt="" /></button>
    </div>
  )
}