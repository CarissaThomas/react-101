import './Meme.css';
import memeData from './memeData';
import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData); //Array of memes

  function displayMeme() {
    const randomNumber = Math.floor(
      Math.random() * allMemeImages.data.memes.length,
    );

    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: allMemeImages.data.memes[randomNumber].url,
      };
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          className="form-input"
          onChange={handleChange}
          value={memeData.topText}
        />
        <input
          type="text"
          name="bottomText"
          className="form-input"
          onChange={handleChange}
          value={memeData.bottomText}
        />
        <button className="form-button" onClick={displayMeme}>
          Get a new meme image
        </button>
      </form>
      <div className="image-wrapper">
        <img className="memeImage" src={meme.randomImage} />
        <h2 className="memeText">{meme.topText}</h2>
        <h2 className="memeText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
