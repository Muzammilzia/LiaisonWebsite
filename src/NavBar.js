import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
//import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

//import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    
  }, [window.screen])

  return (
      <nav className="main-nav">        
        <div className="logo">
          <h2>
            <span>T</span>ech
            <span>M</span>arketing
            <span>S</span>olutions
          </h2>
          <h2></h2>
        </div>

        <div className="hamburger-menu">
            <a href="#" className= "hamburger" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
        </div>
        <div
          className={
            showMediaIcons ? " mobile-menu-link" : "menu-link menu"
          }>
          <ul>
            <li>
            <Link to="/">HOME</Link>
            </li>
            <li>
            <Link to="/about">ABOUT</Link>
            </li>
            <li>
            <Link to="/services">SERVICES</Link>
            </li>
            <li>
            <Link to="/support">SUPPORT</Link>
            </li>
          </ul>
        </div>


      </nav>
  );
};

export {NavBar}