import React from 'react';
import Button from '../button/button';
import './menu.css';
import { MenuContext } from './menu';

export default function MenuButton({children}) {
  const {toggle} = React.useContext(MenuContext)

  return (
    <Button variant="success" size="lg" onClick={toggle}>
      {children}
    </Button>
  );
}
