import React from 'react'
import ContentAbout from './Aboutcomponents/ContentAbout'
import HeaderAbout from './Aboutcomponents/HeaderAbout'
import MainAbout from './Aboutcomponents/MainAbout'
import Footer from './homecomponents/Footer'

const About = () => {
  return (
    <div className='About'>
      <HeaderAbout para = "WE ARE" heading = "Leading Ecommerce company" height = {200} />
      <MainAbout />
      <ContentAbout />
      <Footer />
    </div>
  )
}

export {About}