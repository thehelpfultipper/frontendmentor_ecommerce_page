import React from "react";

const CartContext = React.createContext({
  items: [],
  isCartShowing: false,
  addItem: (item) => { },
  removeItem: (id) => { }, 
  showCart: () => { }
});

export default CartContext;