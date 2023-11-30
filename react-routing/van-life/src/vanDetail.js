import React from 'react';
import { useParams } from 'react-router-dom';

function VanDetail() {
  const params = useParams();
  console.log(params);
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    async function fetchVans() {
      try {
        const response = await fetch(`/api/vans/${params.id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();

        setVan(jsonData.vans);
      } catch (error) {}
    }

    fetchVans();
  }, [params.id]); // if params.id is to change, then rerun this function

  return (
    <div class="vans-container">
      {van ? (
        <div>
          <i>{van.type}</i>
          <h2>{van.name}</h2>
          <p>{van.price}</p>
          <p>{van.description}</p>
        </div>
      ) : (
        <h2>Loading.....</h2>
      )}
    </div>
  );
}

export default VanDetail;
