import React from "react";


export default function Card() {
    return(
        <div className="card">
            <img src={require('../images/katie-zaferes.png')} className="Card--pic" alt='No image' />
            <div className="Card--stats">
                <img src={require('../images/star.png')} className="Card--star" alt='No image' />
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}