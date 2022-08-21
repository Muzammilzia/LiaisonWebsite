import React from 'react'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Header = () => {
  return (
    <section className='Header'>
        <AnimatedOnScroll animationIn="bounceInLeft">
          <h1>Tech Marketing is the new quality</h1>
          <h4>don't have idea about marketing, we got you! Tech Marketing Soltion believes in quality and is prociding great solutions to it's client.</h4>
        </AnimatedOnScroll>
    </section>
  )
}

export default Header