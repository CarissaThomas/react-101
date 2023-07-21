import './Meme.css';
import memeData from './memeData';
import React from 'react';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  

  function displayMeme() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[randomNumber].url);

    setMemeImage(memesArray[randomNumber].url);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="form-input" defaultValue="Shut up" />
        <input
          type="text"
          className="form-input"
          defaultValue="and take my money"
        />
        <button className="form-button" onClick={displayMeme}>
          Get a new meme image
        </button>
      </form>
      <img className="memeImage" src={memeImage} />
    </main>
  );
}

