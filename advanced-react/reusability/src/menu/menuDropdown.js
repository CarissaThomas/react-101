import React from 'react';
import './menu.css';

export default function MenuDropdown({ open, children }) {
  return open ? <div className="menu-dropdown">{children}</div> : null;
}
