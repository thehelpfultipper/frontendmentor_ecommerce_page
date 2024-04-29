import React from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '../../icons/CloseIcon';
// import PreviousIcon from '../../icons/PreviousIcon';
// import NextIcon from '../../icons/NextIcon';

import s from './Modal.module.css';

function Overlay() {
    return <div className={s.overlay}></div>
}

function OverlayContent({children}) {
    return (
        <>
            <Overlay />
            <div className={`${s.overlayContent}`}>
                <span className={s.dismiss}><CloseIcon /></span>
                {/* <span className={s.previous}><PreviousIcon /></span>
                <span className={s.next}><NextIcon /></span> */}
                {children}
            </div>
        </>
    )
}

export default function Modal({children}) {
  return createPortal(<OverlayContent>{children}</OverlayContent>, document.querySelector('#overlay'));
}
