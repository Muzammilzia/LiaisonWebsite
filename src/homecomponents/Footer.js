import React from 'react'
import {BsFacebook, BsWhatsapp, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className='social'>
            <h1>Liaison</h1>
            <p>
                lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad
                lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad lorem ispsdad
            </p>
            <ul>
                <li><BsFacebook className = 'socialIcon' size={30}/></li>
                <li><BsWhatsapp className = 'socialIcon' size={30}/></li>
                <li><BsLinkedin className = 'socialIcon' size={30}/></li>
            </ul>

        </div>
        <div className='address'>
            <h1>Address</h1>
            <ul>
                <li><a href='#'>127, westwood Lane</a></li>
                <li><a href='#'>DA15 9ps, sidicup</a></li>
                <li><a href='#'>London, UK</a></li>
            </ul>
        </div>
        <div className='connect'>
            <h1>CONTACT US</h1>
            <ul>
                <li>We would love to talk to you</li>
                <li>+923243238</li>
            </ul>
            <button>Conatct Support</button>
        </div>
    </div>
        <div className='copyrights'>
            <p>All rights reserved by Liaison</p>
            <p>Website by Muzzammil</p>
        </div>
        </>
  )
}

export default Footer