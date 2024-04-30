import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultContext = {
  items: [],
  isCartShowing: false,
};

const cartReducer = ({ state, action }) => {
  return defaultContext;
};

export default function CartProvider({ children }) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, defaultContext);

  const addToCartHandler = (item) => {
    cartDispatcher({ type: "ADD", data: item });
  };
  const removeFromCartHandler = (id) => {
    cartDispatcher({ type: "REMOVE", id });
  };

  const showCartHandler = (val) => cartDispatcher({ type: "CART", val });

  const cartContext = {
    items: cartState.items,
    isCartShowing: cartState.isCartShowing,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
    showCart: showCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
