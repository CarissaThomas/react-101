import React from "react"
import airbnbLogo from '../images/airbnb-logo.png';


export default function Navbar() { 
    return (
        <div className="container">
            <nav className="navbar">
                <img className="logo" src={airbnbLogo} />
            </nav>
        </div>
    );
}