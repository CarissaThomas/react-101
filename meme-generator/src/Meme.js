import './Meme.css';
import memeData from './memeData';
import React from 'react';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages] = React.useState(memeData); //Array of memes

  function displayMeme() {
    const randomNumber = Math.floor(
      Math.random() * allMemeImages.data.memes.length,
    );

    setMemeImage(prevState => {
      return {
        ...prevState,
        randomImage: allMemeImages.data.memes[randomNumber].url,
      };
    });
  }

  const imgElement = <img className="memeImage" src={memeImage.randomImage} />;

  const handleSubmit = event => {
    event.preventDefault();
  };

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
      <div class="image-wrapper">{imgElement}</div>
    </main>
  );
}
