import React from 'react'
import logo from "../images/react-icon-small.png"
import "../App.css"
function Navbar(){
    return (
        <nav className='navbar'>
            <img className = 'logo' src= {logo}/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar