import React, { useState } from "react";

import ProductPricing from "./ProductPricing";
import { PRODUCTS } from "../helpers/data";
import CartAction from "./Cart/CartAction";

import s from "./Product.module.css";

export default function ProductInfo() {
  const [displayProduct, setDisplayProduct] = useState(PRODUCTS[0]); // Dummy data and handling, assuming indicator of single product is available
  const { ...item } = displayProduct;

  return (
    <div className={s.productInfo}>
      <span className={s.company}>{item.brand}</span>
      <hgroup className={s.product}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </hgroup>
      <ProductPricing item={item} />
      <CartAction />
    </div>
  );
}
