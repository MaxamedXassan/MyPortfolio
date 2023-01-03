import "./NavBarStyles.css";

import React, { useState } from 'react'
import logo from "../img/logo.png";
import {Link} from "react-router-dom"

import { FaBars, FaTimes } from "react-icons/fa";



const NavBar = () => {

    const [click, setClick] = useState(false);
    const handlaClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >=10) {
            setColor(true);
        }else {
            setColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <img className="logo" src={logo}/>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handlaClick}>
            {click ? ( <FaTimes size={20} style={{color: "#fff"}} />) : (
                 <FaBars size={20} style={{color: "#fff"}} />
            )}
           
           
        </div>
    </div>
  )
}

export default NavBar