import './Meme.css';
import React from 'react';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]); //Array of memes

  React.useEffect(() => { 
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(response => setAllMemeImages(response.data.memes))
  }, [])

  function displayMeme() {

    const randomNumber = Math.floor(
      Math.random() * allMemeImages.length,
    );

    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: allMemeImages[randomNumber].url,
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
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          className="form-input"
          onChange={handleChange}
          value={meme.bottomText}
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
