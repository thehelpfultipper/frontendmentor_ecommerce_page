import React from "react";

import Modal from "./UI/Modal";
import ProductDisplay from "./ProductDisplay";
import NextIcon from "../icons/NextIcon";
import PreviousIcon from "../icons/PreviousIcon";

import s from "./LightBox.module.css";

export default function LightBox() {
  return (
    <Modal>
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
