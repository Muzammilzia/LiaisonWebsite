import React from 'react'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Header = () => {
  return (
    <section className='Header'>
        <AnimatedOnScroll animationIn="bounceInLeft">
          <h1>Want to grow your business? succeed in world's largest markets? or become A successful entrepreneur!</h1>
          <h4>Liaison Marketing Solution is dedicated to growing your business on one of the world's largest e-commerce platforms. Our team has been dedicated to helping  people invest and working on international platforms. Our goal is to provide service users with full support and quality service.</h4>
        </AnimatedOnScroll>
    </section>
  )
}

export default Header