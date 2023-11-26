import React from 'react';
import "./Navbar.css"

const Navbarr = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h5>Translator</h5>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbarr;