import React, { useState } from "react";

import ProductThumbnail from "./ProductThumbnail";
import * as assets from "../assets/index";
import useMyContext from "../hooks/useMyContext";
import LightboxContext from "../context/lightbox-context";

import s from "./Product.module.css";

export default function ProductDisplay() {
  const [selectedItem, setSelectedItem] = useState(1);
  const {isLbShowing, onChange} = useMyContext(LightboxContext);

  const lightboxHandler = () => {
    if(isLbShowing) return; // prevent click on lightbox product
    onChange(true);
  };

  return (
    <div className={`productDisplayWrapper`}>
        <div
          className={`${s.productMain}`}
          style={{ backgroundImage: `url(${assets["prod_" + selectedItem]})` }}
          onClick={lightboxHandler}
        ></div>
        <div className={`${s.thumbnailWrapper}`}>
          {Array.from({ length: 4 }).map((_, idx) => {
            const item = idx + 1;

            return (
              <ProductThumbnail
                item={item}
                key={idx}
                selected={selectedItem}
                onSelect={setSelectedItem}
              />
            );
          })}
        </div>
      </div>
  );
}

ProductDisplay.defaultProps = {
  item: 1,
  isLtbx: false
}