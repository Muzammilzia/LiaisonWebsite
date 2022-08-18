import React from 'react'
import HeaderAbout from './Aboutcomponents/HeaderAbout'
import ServicesCard from './Aboutcomponents/ServicesCard'
import Footer from './homecomponents/Footer'

const Services = () => {
  return (
    <div>
      <HeaderAbout para = "WE ARE" heading = "PAKISTAN'S LARGEST ECOMMERCE NETWORK" height = {400}/>
      <div>
        <h1>Our Services</h1>
        <p>Hello International delivers result-driven services to lead a successful business. We are a team of dedicated customer care representatives working to enhance customer satisfaction with the effective implementation of strategies and plans. With first-class technical expertise, we provide solutions tailor-made to meet your needs.</p>
      </div>
      <ServicesCard />

      <Footer />
    </div>
  )
}

export {Services}