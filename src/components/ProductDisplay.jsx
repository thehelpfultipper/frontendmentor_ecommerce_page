import React, { useState } from "react";

import ProductThumbnail from "./ProductThumbnail";
import * as assets from "../assets/index";
import useMyContext from "../hooks/useMyContext";
import LightboxContext from "../context/lightbox-context";
import ArrowNav from "./UI/ArrowNav";
import useWindowSize from "../hooks/useWindowSize";

import s from "./Product.module.css";

export default function ProductDisplay(props) {
  const [selectedItem, setSelectedItem] = useState(1);
  const { isLbShowing, onChange } = useMyContext(LightboxContext);
  const { width } = useWindowSize();

  const lightboxHandler = () => {
    if (width <= 1210 || isLbShowing) return; // prevent click on lightbox product
    onChange(true);
  };

  return (
    <div className={`${s.productDisplayWrapper} ${props?.lb && s.lbx}`}>
      <div
        className={`${s.productMain}`}
        onClick={lightboxHandler}
      >
        <img src={assets["prod_" + selectedItem]} alt={`Product ${selectedItem}`} />
      </div>
      <ArrowNav
        cs={s.productMobArrowNav}
        currentIndex={selectedItem}
        onSelect={setSelectedItem}
      />
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
  lb: false,
};
