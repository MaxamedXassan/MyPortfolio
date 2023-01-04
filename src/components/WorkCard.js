import "./WorkCardStyle.css";

import React from 'react';

import pro1 from "../img/pro1.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="project-card">
    <img src={pro1} alt="image" />
    <h2 className="project-title">Project Title</h2>
    <div className="pro-details">
        <p>This is a text</p>
        <div className="pro-btns">
            <NavLink to="url.com" className="btn">View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard;