import React, { useState } from 'react';

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);
console.log('modal---', isOpen)
    function openModal() {
      setIsOpen(true)
    };
    function closeModal() {
      setIsOpen(false)
    };

  return {isOpen, openModal, closeModal}
}
