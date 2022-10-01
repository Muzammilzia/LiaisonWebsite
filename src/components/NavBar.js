import { Link, Navigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
//import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO from '../assets/images/LMSLogo.png'
import {useNavigate} from 'react-router-dom'

//import { NavLink } from "react-router-dom";
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const NavBar = () => {
  let Navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
    
  }, [])
  
  useEffect(()=>{
    if(windowSize.innerWidth > 997){
      setShowMediaIcons(false)
    }
  }, [windowSize.innerWidth])
  return (
      <nav className="main-nav">        
        <div className="logo">
          {/* <h2>
            <span>T</span>ech
            <span>M</span>arketing
            <span>S</span>olutions
          </h2> */}
            <img src={LOGO} width={180} style={{cursor: "pointer"}} onClick = {()=> Navigate("/TechMarketingSolutions")}/>
          <h2></h2>
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
            <Link to="/TechMarketingSolutions">HOME</Link>
            </li>
            <li>
            <Link to="/TechMarketingSolutions/about">ABOUT</Link>
            </li>
            <li>
            <Link to="/TechMarketingSolutions/services">SERVICES</Link>
            </li>
            <li>
            <Link to="/TechMarketingSolutions/support">SUPPORT</Link>
            </li>
          </ul>
        </div>


      </nav>
  );
};

export {NavBar}