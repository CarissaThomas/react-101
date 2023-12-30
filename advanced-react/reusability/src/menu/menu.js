import React from 'react';
import './menu.css';

const MenuContext = React.createContext();

export default function Menu({children}) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    console.log('toggled');
    setOpen(prevOpen => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      <div className="menu">
        {children}

        {/* Not suggested React.Children method to drill state to multiple child components  */}
        {/* {React.Children.map(children, child => {
        return React.cloneElement(child, {
          open,
          toggle,
        });
      })} */}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };

