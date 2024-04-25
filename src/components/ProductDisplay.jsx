import React, { useState } from "react";

import ProductThumbnail from "./ProductThumbnail";
import * as assets from "../assets/index";

import s from './Product.module.css';

export default function ProductDisplay() {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <div className={`productDisplayWrapper`}>
      <div
        className={`${s.productMain}`}
        style={{ backgroundImage: `url(${assets["prod_" + selectedItem]})` }}
      ></div>
      <div className={`${s.thumbnailWrapper}`}>
        {Array.from({ length: 4 }).map((_, idx) => {
          const item = idx + 1;
          return (
            <ProductThumbnail
              item={item}
              key={idx}
              onSelect={setSelectedItem}
            />
          );
        })}
      </div>
    </div>
  );
}
