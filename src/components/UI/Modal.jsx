import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from '../../icons/CloseIcon';
import useMyContext from '../../hooks/useMyContext';
import LightboxContext from '../../context/lightbox-context';

import s from './Modal.module.css';

function Overlay() {
    return <div className={s.overlay}></div>
}

function OverlayContent({children}) {
    const {isLbShowing,onChange} = useMyContext(LightboxContext);

    const dismissModalHandler = () => {
        onChange(false);
    }

    useEffect( ()=>{
        function handleScroll() {
            if (isLbShowing) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        handleScroll();

        return () => document.body.style.overflow = 'auto';
    }, [isLbShowing]);
    
    return (
        <>
            <Overlay />
            <div className={`${s.overlayContent}`}>
                <span 
                    className={s.dismiss}
                    onClick={dismissModalHandler}
                    typeof={`button`}
                ><CloseIcon fill={`#fff`} /></span>
                {children}
            </div>
        </>
    )
}

export default function Modal({children}) {
  return createPortal(<OverlayContent>{children}</OverlayContent>, document.querySelector('#overlay'));
}
