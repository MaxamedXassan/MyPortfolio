import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../img/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HELLO, I'M A FREELANCER.</p>
            <h1>Web Developer.</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;

// remote origin already exists