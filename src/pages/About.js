import React from 'react'
import ContentAbout from '../components/ContentAbout'
import HeaderAbout from '../components/HeaderAbout'
import MainAbout from '../components/MainAbout'

const About = () => {
  return (
    <div className='About'>
      <HeaderAbout para = "WE ARE" heading = "Leading Ecommerce company" height = {200} />
      <MainAbout />
      <ContentAbout />
    </div>
  )
}

export {About}