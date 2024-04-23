import React from "react";
import * as assets from "../assets/index";

export default function ProductThumbnail({ item, onSelect }) {
  const imageSelectHandler = e => {
    onSelect(e.target.id);
  };
  return (
    <div
      id={item}
      className={`productThumbnail`}
      style={{ backgroundImage: `url(${assets['prod_' + item + "_thumb"]})` }}
      onClick={imageSelectHandler}
    ></div>
  );
}
