import React from 'react';
import './menu.css';
import { MenuContext } from './menu';

export default function MenuDropdown({ children }) {
  const { open } = React.useContext(MenuContext)

  return open ? <div className="menu-dropdown">{children}</div> : null;
}
