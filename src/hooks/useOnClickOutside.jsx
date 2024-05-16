import React, { useEffect } from 'react';

export default function useOnClickOutside(ref, callback) {
  useEffect( ()=>{
    function listener(e) {
        let target = e.target;

        if(!ref.current || ref.current.contains(target)) return;
        
        callback(e);
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    }
  }, [ref, callback]);
}
