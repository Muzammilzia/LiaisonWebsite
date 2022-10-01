import React from 'react'
// import download5 from '../assets/images/download5.jfif'
import banner from '../assets/images/banner.jpg'

const HeaderAbout = (props) => {
  return (
    <div className='HeaderAbout'>
        <div className='HeadingText' style={{top: `${props.top}px`}}>
          <p>{props.para}</p>
          <h2>{props.heading}</h2>
        </div>
      <div className='front' style={{height: `${props.height}px`}}>
        <img src={banner} alt='' style={{height: `${props.height}px`}}/>
      </div>
      {/* <div className='back' style={{height: `${props.height + 30}px`}}></div> */}
    </div>
  )
}

export default HeaderAbout