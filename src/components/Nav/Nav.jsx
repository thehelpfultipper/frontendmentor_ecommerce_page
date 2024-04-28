import React from "react";

import * as assets from "../../assets/index.js";
import CartIcon from "../../icons/CartIcon.jsx";
import { MENU } from "../../helpers/data.js";

import s from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={`${s.navWrapper}`}>
      <div className={s.navLft}>
        <div className={s.logo}>
          <img
            src={assets.logo}
            alt="Company logo."
          />
        </div>
        <div className={s.menu}>
          <ul className={`noList`}>
            {MENU.map((item, i) => {
              return (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={s.navRht}>
        <div className={s.cart}>
          <CartIcon />
        </div>
        <div className="profile">
          <img
            src={assets.avatar}
            alt="Profile image"
          />
        </div>
      </div>
    </nav>
  );
}
