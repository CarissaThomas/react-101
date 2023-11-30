import React from 'react';
import './vans.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Vans() {
  const [allVanImages, setAllVanImages] = React.useState([]); //Array of memes

  React.useEffect(() => {
    async function fetchVans() {
      try {
        const response = await fetch('/api/vans');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        setAllVanImages(jsonData.vans);
      } catch (error) {}
    }

    fetchVans();
  }, []);

  const vanElements = allVanImages.map(van => (
    van ? (
    <div key={van.id} className='image-container'>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div>
          <h3>{van.name}</h3>
          <p>{van.price}</p>
        </div>
        <button>{van.type}</button>
      </Link>
    </div>) : <h2>Loading......</h2>
  ));

  return <div class="vans-container">{vanElements}</div>;
}

export default Vans;
