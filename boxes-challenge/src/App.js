import './App.css';
import boxes from './data/boxesData';
import React from "react"
import Box from './components/box';

function App() {
  const boxData = boxes.map(c => {
    return (
      <Box
        key={c.id}
        item={c}
      />
    );
  });

  return (
    <main>
      <h1>Boxes go here </h1>
      {boxData}
    </main>
  );
}

export default App;
