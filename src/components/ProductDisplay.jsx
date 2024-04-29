import React, { useCallback, useEffect, useRef, useState } from "react";

import ProductThumbnail from "./ProductThumbnail";
import LightBox from "./LightBox";
import useModal from "../hooks/useModal";
import * as assets from "../assets/index";

import s from "./Product.module.css";

export default function ProductDisplay(props) {
  const [selectedItem, setSelectedItem] = useState(props?.item || 1);
  const { isOpen, openModal } = useModal();

  const lightboxHandler = () => {
    if(props?.open) return;
    openModal();
  };

  return (
    <>
      {isOpen ? <LightBox open={isOpen} item={selectedItem} /> : null}
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
    </>
  );
}
