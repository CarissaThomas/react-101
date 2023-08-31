import './App.css';
import boxes from './data/boxesData';
import React from 'react';
import Box from './components/box';

function App() {
  const [stateBoxes, setBoxes] = React.useState(boxes);

  function toggle(id) {
    console.log(id)
    setBoxes(prevState => {
      const newBoxes = [];

      for (let index = 0; index < prevState.length; index++) {
        const currentBox = prevState[index];

        if (currentBox.id === id) {
          const updatedSquare = {
            ...currentBox,
            on: !currentBox.on,
          };
          newBoxes.push(updatedSquare);
        } else {
          newBoxes.push(currentBox);
        }
      }
      return newBoxes;
    })
  }

  const boxData = stateBoxes.map(c => {
    return <Box key={c.id} item={c} on={c.on} toggle={toggle} />;
  });

  return (
    <main>
      <h1>Boxes go here </h1>
      {boxData}
    </main>
  );
}

export default App;
