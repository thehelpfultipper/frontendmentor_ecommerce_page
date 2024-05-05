import React, { useEffect } from "react";

import Modal from "./UI/Modal";
import ProductDisplay from "./ProductDisplay";
import NextIcon from "../icons/NextIcon";
import PreviousIcon from "../icons/PreviousIcon";
import useMyContext from "../hooks/useMyContext";
import LightboxContext from "../context/lightbox-context";

import s from "./LightBox.module.css";

export default function LightBox() {
  const {isLbShowing,onChange} = useMyContext(LightboxContext);

    const dismissModalHandler = () => {
        onChange(false);
    }

    useEffect( ()=>{
        function handleScroll() {
            if (isLbShowing) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        handleScroll();

        return () => document.body.style.overflow = 'auto';
    }, [isLbShowing]);

  return (
    <Modal onDismiss={dismissModalHandler}>
      <ProductDisplay lb='true' />
      <span className={`${s.previous} ${s.lbNav}`}>
        <PreviousIcon />
      </span>
      <span className={`${s.next} ${s.lbNav}`}>
        <NextIcon />
      </span>
    </Modal>
  );
}
