import React from "react"
import photoGrid from '../images/photo-grid.png';


export default function Hero() { 
    return (
        <div className="heroContainer">
            <img className="photoGrid" src={photoGrid} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </div>
    );
}