import React from 'react'

const ServicesCard = (props) => {
  return (
    <div className='ServicesCard'>
        <h2>{props.heading}</h2>
        <h5>{props.text}</h5>
    </div>
  )
}

export default ServicesCard