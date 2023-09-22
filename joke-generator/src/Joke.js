import React from "react"
import PropTypes from 'prop-types';


export default function Joke(props) { 
    Joke.propTypes = {
        setup: PropTypes.string,
        punchline: PropTypes.string,
        isShown: PropTypes.bool,
        id: PropTypes.number
    };

    const [isShown, setShown] = React.useState(false);

    function toggle() { 
        setShown(prevState => !prevState)
      }

    return (
        <div>
            <h3>{props.setup}</h3>
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
        </div>
    )
} 