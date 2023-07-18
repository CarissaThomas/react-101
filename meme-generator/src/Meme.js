import './Meme.css';

function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" className="form-input" text="top" />
        <input type="text" className="form-input" text="bottom" />
        <button className="form-button">Get a new meme image</button>
      </form>
    </main>
  );
}

export default Meme;
