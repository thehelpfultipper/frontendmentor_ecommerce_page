import React from "react";
import { MENU } from "../../helpers/data.js";

import s from "./Nav.module.css";


export default function MenuList({mob}) {
  return (
    <ul className={`noList ${mob ? s.mob : ''}`}>
      {MENU.map((item, i) => {
        return (
          <li key={i}>
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
}
