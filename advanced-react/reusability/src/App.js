import './App.css';
import Button from './button/button';
import { FaBeer } from 'react-icons/fa';
import './button/button.css';

function App() {
  return (
    <main className="App">
      <Button size="small" variant="success" className="green" onClick={toggle}>
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
      </Button>
    </main>
  );

  function toggle() {
    console.log('logging in.....');
  }
}

export default App;
