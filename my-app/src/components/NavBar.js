import React from "react";

export default function Navbar() {
    return (
        
        <nav>
            <img src={require('../images/airbnb-logo.png')} className="nav--logo" alt='No image' />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
            </ul>
        </nav>
        
    )
}
    