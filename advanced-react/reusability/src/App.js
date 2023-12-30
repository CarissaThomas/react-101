import './App.css';
import Button from './button/button';
import { FaBeer } from 'react-icons/fa';
import './button/button.css';
import Menu from './menu/menu';
import MenuButton from './menu/menuButton';
import MenuDropdown from './menu/menuDropdown';
import MenuItem from './menu/menuItem';
import React from 'react';

function App() {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];


  return (
    <main>
        <Menu buttonText="Sports">
          <MenuButton>Sports</MenuButton>
          <MenuDropdown>
            {sports.map(s => (
              <MenuItem key={s}>{s}</MenuItem>
            ))}
          </MenuDropdown>
        </Menu>
      {/* <Button size="small" variant="success" className="green" onClick={toggle}>
        Click me!
        <FaBeer />
      </Button>
      <Button size="large" variant="danger" className="green" onClick={toggle}>
        Click me!
        <FaBeer />
      </Button>
      <Button size="small" variant="warning" className="green" onClick={toggle}>
        Click me!
        <FaBeer />
      </Button> */}
    </main>
  );
}

export default App;
