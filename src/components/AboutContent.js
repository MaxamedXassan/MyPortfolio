import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

import react3 from "../img/react2.jpg"
import react4 from "../img/react4.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer. i create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react4} className="img" alt="treu" />
                </div>
                <div className="img-stack bottom">
                    <img src={react3} className="img" alt="treu" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent