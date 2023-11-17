import React from 'react';
import './vans.css';

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
        console.log(jsonData);

        setAllVanImages(jsonData.vans);
      } catch (error) {}
    }

    fetchVans();
  }, []);

  const vanElements = allVanImages.map(van => (
    <div>
      <img src={van.imageUrl} />
      <div>
        <h3>{van.name}</h3>
        <p>{van.price}</p>
      </div>
      <i>{van.type}</i>
    </div>
  ));

  return <div class="vans-container">{vanElements}</div>;
}

export default Vans;
