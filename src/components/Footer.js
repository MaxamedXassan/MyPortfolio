import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                      <p>Hiiran Mugdisho</p>
                      <p>Somalia</p>
                    </div>
                  </div>
                    <div className="phone">
                      <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    252-612642905</h4>
                    </div>
               
                    <div className="email">
                      <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                   hassanhuriye05@gmail.com</h4>
                    </div>
            </div>

            <div className="right">
              <h4>About the company</h4>
              <p>This is me mo.hassan. CEO &
                I enjoy <br/> discussing new project
                and design challenges.
              </p>
              <div className="social">
              <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
              <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
              <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer