import React from 'react'
import {BsFacebook, BsWhatsapp, BsLinkedin} from 'react-icons/bs'
import LOGO from '../assets/images/LMS_LOGO_35px.png'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className='social'>
            {/* <h1 style = {{textAlign: "center"}}>Tech Marketing Solutions</h1> */}
            <div style={{textAlign: "center"}}>
                <img src={LOGO}/>
            </div>
            <p style = {{textAlign: "center"}}>
                lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad
                lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad
            </p>
            <ul style = {{textAlign: "center"}}>
                <a href=''>
                    <li><BsFacebook className = 'socialIcon' size={30}/></li>
                </a>
                <a href=''>
                    <li><BsWhatsapp className = 'socialIcon' size={30}/></li>
                </a>
                <a href=''>
                    <li><BsLinkedin className = 'socialIcon' size={30}/></li>
                </a>
            </ul>

        </div>
        <div className='address'>
            <h1>Address</h1>
            <ul>
                <li><a href='#'>127, westwood Lane</a></li>
                <li><a href='#'>DA15 9ps, sidicup</a></li>
                <li><a href='#'>London, UK</a></li>
            </ul>
            <button>Conatct Support</button>
        </div>
        {/* <div className='connect'>
            <h1 style = {{textAlign: "center"}}>CONTACT US</h1>
            <ul style = {{textAlign: "center"}}>
                <li>We would love to talk to you</li>
                <li>+923243238</li>
            </ul>
        </div> */}
    </div>
        <div className='copyrights'>
            <p>All rights reserved by Tech Marketing Solutions</p>
            <p>Website by: <a href = "https://www.linkedin.com/in/muzzammil-zia-9a24601b4/">Muzzammil</a> </p>
        </div>
        </>
  )
}

export default Footer