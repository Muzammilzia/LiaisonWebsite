import React from 'react'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Header = () => {
  return (
    <section className='Header'>
        <AnimatedOnScroll animationIn="bounceInLeft">
          <h1>PAKISTAN’S LARGEST ECOMMERCE NETWORK</h1>
          <h4>Enablers is directing the people of Pakistan towards business growth, working on the biggest markets of the world, and becoming successful entrepreneurs.</h4>
        </AnimatedOnScroll>
    </section>
  )
}

export default Header