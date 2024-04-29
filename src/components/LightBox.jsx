import React from 'react';

import Modal from './UI/Modal';
import ProductDisplay from './ProductDisplay';

import s from './LightBox.module.css';

export default function LightBox() {
  return (
    <Modal>
        <ProductDisplay />
    </Modal>
  )
}
