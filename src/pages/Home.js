import React from 'react'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/data';
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <ImageSlider slides = {SliderData}/>
      <Main/>
    </div>
  )
}

export {Home}