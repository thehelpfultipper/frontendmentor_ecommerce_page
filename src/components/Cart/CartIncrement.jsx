import React from 'react';

import { getAssetPath } from '../../helpers/utils';

import s from './Cart.module.css';

export default function CartIncrement({inc, onInc, onIncAct}) {
  const decHandler = () => {
    onInc(prevState => prevState > 0 ? prevState - 1 : 0);
    onIncAct('dec');
  };
  const incHandler = () => {
    onInc(prevState => prevState + 1);
    onIncAct('inc');
  };
  
  return (
    <div className={s.cartIncrementWrapper}>
        <button className={`${s.incBtn} noBtn`} onClick={decHandler}><img src={`${getAssetPath('static/icon-minus.svg')}`} alt="" /></button>
        <span className={s.cartQt}>{inc}</span>
        <button className={`${s.incBtn} noBtn`} onClick={incHandler}><img src={`${getAssetPath('static/icon-plus.svg')}`} alt="" /></button>
    </div>
  )
}
