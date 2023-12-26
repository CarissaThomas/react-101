import React from 'react';
import MenuButton from './menuButton';
import MenuDropdown from './menuDropdown';
import './menu.css';

export default function Menu({ children }) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    console.log("toggled")
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <div className="menu">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          open,
          toggle,
        });
      })}
    </div>
  );
}
