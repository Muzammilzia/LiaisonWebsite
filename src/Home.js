import React from 'react'
import ImageSlider from './homecomponents/ImageSlider';
import { SliderData } from './homecomponents/data';
import Header from './homecomponents/Header';
import Main from './homecomponents/Main';
import Footer from './homecomponents/Footer';

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <ImageSlider slides = {SliderData}/>
      <Main/>
      <Footer />
    </div>
  )
}

export {Home}