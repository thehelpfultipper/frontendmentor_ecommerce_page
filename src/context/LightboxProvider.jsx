import React, { useState } from 'react';

import LightboxContext from './lightbox-context';

const defaultContext = {
    selected: 1, 
    isLbShowing: false
}

export default function LightboxProvider({children}) {
    const [state, setState] = useState(defaultContext);

    const selectionHandler = (selection) => {
        setState( prevState => {
            return {
                ...prevState,
                selected: selection?.item || prevState.selected,
                isLbShowing: selection?.isLb || prevState.isLbShowing
            }
        })
    }

    const lightboxContext = {
        selected: state.selected,
        isLbShowing: state.isLbShowing,
        onChange: selectionHandler
    }

  return (
    <LightboxContext.Provider value={lightboxContext}>
      {children}
    </LightboxContext.Provider>
  )
}
