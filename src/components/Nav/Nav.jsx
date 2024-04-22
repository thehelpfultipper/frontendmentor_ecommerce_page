import React from "react";

import * as assets from "../../assets/index.js";
import { MENU } from "../../helpers/data.js";

export default function Nav() {
  return (
    <nav className="navWrapper">
      <div className="navLft">
        <div className="logo">
          <img
            src={assets.logo}
            alt="Company logo."
          />
        </div>
        <div className="menu">
          <ul>
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
      <div className="navRht">
        <div className="cart">
          <img
            src="/icon-cart.svg"
            alt="Shopping cart icon."
          />
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
