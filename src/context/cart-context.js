import React from "react";

const CartContext = React.createContext({
  items: Array,
  isCartShowing: Boolean,
  totalQuantity: Number,
  totalAmount: Number,
  addItem: Function,
  removeItem: Function, 
  showCart: Function
});

export default CartContext;