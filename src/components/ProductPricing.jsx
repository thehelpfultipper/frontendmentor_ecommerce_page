import React, { useEffect, useState } from "react";

import s from "./Product.module.css";


export default function ProductPricing({item}) {
  const [isSale, setIsSale] = useState(false);

  useEffect(() => {
    // False check on product pricing to determine sale
    // would occur via property check on product data
    item?.sale !== '' && setIsSale(true);
  }, []);

  return (
    <div className={s.priceWrapper}>
      <span className={s.price}>{item.currentPrice}</span>
      {isSale && (
        <>
          <span className={s.discount}>{item.sale}</span>
          <span className={s.fullPrice}>{item.fullPrice}</span>
        </>
      )}
    </div>
  );
}
