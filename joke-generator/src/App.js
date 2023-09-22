import './App.css';
import Joke from './Joke'
import Jokes from './data/Jokes'
import React from "react"


function App() {
  const [jokeData] = React.useState(Jokes);

  var jokeRender = jokeData.map(j => { 
    return <Joke
      key={j.id} 
      setup={j.setup}
      punchline={j.punchline}
      isShown={j.isShown}/>
  })


  return (
    <div className="App">
      {jokeRender}
    </div>
  );
}

export default App;
