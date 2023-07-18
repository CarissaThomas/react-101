import './Header.css';
import troll from './images/Troll Face.png';

function Header() {
  return (
      <div className="header">
          <div className="left-side">
            <img src={troll}></img>
              <h1>Meme Generator</h1>
        </div>
            <h3>React Course - Project</h3>
    </div>
  );
}

export default Header;
