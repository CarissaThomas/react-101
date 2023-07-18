import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Cards from './data/cards.js';

function App() {

  const cardData = Cards.map(c => { 
    return <Card
      key={c.id}
      item={c}
      //{...item} alternate syntax for line above  
    />
  })

//ALT SYNTAX FOR ACCESSING OBJECT PROPERTIES 
// const { image, rating, title, cost, isFree} = cardData

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cardData}
    </div>
  );
}

export default App;
