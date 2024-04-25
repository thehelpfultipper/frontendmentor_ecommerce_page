import React from "react";
import * as assets from "../assets/index";

import s from './Product.module.css';

export default function ProductThumbnail({ item, onSelect }) {
  const imageSelectHandler = e => {
    onSelect(e.target.id);
  };
  return (
    <div
      id={item}
      className={`${s.productThumbnail}`}
      style={{ backgroundImage: `url(${assets['prod_' + item + "_thumb"]})` }}
      onClick={imageSelectHandler}
    ></div>
  );
}
