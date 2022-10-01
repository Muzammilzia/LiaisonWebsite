import React, {useState} from 'react'
import HeaderAbout from '../components/HeaderAbout'
import ServicesCard from '../components/ServicesCard'
import {EcommerceData, CallCenterData, SoftwareData, CardData} from '../components/data.js'
import { ConsultationForm } from '../components/ConsultationForm'


const Services = () => {
  const [plan, setPlan] = useState('');
  return (
    <div className='services'>
      <HeaderAbout height = {200} />
      <div className='serviceText'>
        <h1 style={{textAlign: "center"}}>Our Services</h1>
        <p style={{textAlign: "center"}}>Tech Marketing delivers result-driven services to lead a successful business. We are a team of dedicated customer care representatives working to enhance customer satisfaction with the effective implementation of strategies and plans. With first-class technical expertise, we provide solutions tailor-made to meet your needs.</p>
      </div>
        <h1 style={{textAlign: "center", marginBottom: 0}}>Ecommerce Services</h1>
      <div className='serviceCardDiv'>
        {EcommerceData.map((data, index)=>{
          const { text, heading, Icon } = data;
          return <ServicesCard key = {index} heading = {heading} Icon = {Icon} text = {text}/>
        })}
      </div>
        <h1 style={{textAlign: "center", marginBottom: 0}}>Call Center Services</h1>
      <div className='serviceCardDiv'>
        {CallCenterData.map((data, index)=>{
          const { text, heading, Icon } = data;
          return <ServicesCard key = {index} heading = {heading} Icon = {Icon} text = {text}/>
        })}
      </div>
      <h1 style={{textAlign: "center", marginBottom: 0}}>Software Services</h1>
      <div className='serviceCardDiv'>
        {SoftwareData.map((data, index)=>{
          const { text, heading, Icon } = data;
          return <ServicesCard key = {index} heading = {heading} Icon = {Icon} text = {text}/>
        })}
      </div>
      <ConsultationForm data={CardData} data1={EcommerceData} data2 = {CallCenterData} data3={SoftwareData} clicked = {true} plan={plan} setPlan={setPlan}/>
    </div>
  )
}

export {Services}