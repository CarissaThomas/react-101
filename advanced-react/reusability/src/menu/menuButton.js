import React from 'react';
import Button from '../button/button';
import './menu.css';

export default function MenuButton({ toggle, children }) {
  return (
    <Button variant="success" size="lg" onClick={toggle}>
      {children}
    </Button>
  );
}
