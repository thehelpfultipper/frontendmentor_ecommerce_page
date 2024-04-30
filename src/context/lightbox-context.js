import React from "react";

const LightboxContext = React.createContext({
  selected: Number,
  isLbShowing: Boolean,
  onChange: (item) => { }
});

export default LightboxContext;