import React from "react";

import ProductDisplay from "./ProductDisplay";
import ProductInfo from "./ProductInfo";
import LightBox from "./LightBox";
import useMyContext from "../hooks/useMyContext";
import LightboxContext from "../context/lightbox-context";

import s from "./Product.module.css";

export default function Product() {
  const { isLbShowing } = useMyContext(LightboxContext);

  return (
    <>
      {isLbShowing && <LightBox />}
      <ProductDisplay />
      <ProductInfo />
    </>
  );
}
