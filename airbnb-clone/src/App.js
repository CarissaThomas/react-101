import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Cards from './data/cards.js';

function App() {

  const cardData = Cards.map(c => { 
    return <Card
    image={c.image}
    rating={c.info[0].rating}
    title={c.info[0].title}
    cost={c.info[0].cost}
    isVisible={c.isVisible} />
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
