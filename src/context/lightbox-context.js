import React, { useContext } from "react";

const LightboxContext = React.createContext({
  isLbShowing: Boolean,
  onChange: (item) => { }
});

export default LightboxContext;