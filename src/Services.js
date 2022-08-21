import React from 'react'
import HeaderAbout from './Aboutcomponents/HeaderAbout'
import ServicesCard from './Aboutcomponents/ServicesCard'
import Footer from './homecomponents/Footer'
import {ServiceCardData} from './homecomponents/data.js'

const Services = () => {
  return (
    <div className='services'>
      <HeaderAbout para = "WE ARE" heading = "Leading Ecommerce company" height = {400} top = {200}/>
      <div className='serviceText'>
        <h1 style={{textAlign: "center"}}>Our Services</h1>
        <p style={{textAlign: "center"}}>Tech Marketing delivers result-driven services to lead a successful business. We are a team of dedicated customer care representatives working to enhance customer satisfaction with the effective implementation of strategies and plans. With first-class technical expertise, we provide solutions tailor-made to meet your needs.</p>
      </div>
      <div className='serviceCardDiv'>
        {ServiceCardData.map((data, index)=>{
          const { text, heading, Icon } = data;
          return <ServicesCard key = {index} heading = {heading} Icon = {Icon} text = {text}/>
        })}
      </div>
      <Footer />
    </div>
  )
}

export {Services}