import React, { useState } from 'react'
import HeaderAbout from './Aboutcomponents/HeaderAbout'
import {RiWhatsappFill, RiMailFill, RiMapPin2Fill} from 'react-icons/ri'
import Footer from './homecomponents/Footer';

const Support = () => {
  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('Your E-mail');
  const [message, setMessage] = useState('Your Message');
  return (
    <div className='support'>
      <HeaderAbout para = "WE ARE" heading = "Leading Ecommerce company" height = {200}/>
      <div className='supportForm'>
        <div className='supportFormLeft'>
          <h2>Find us at</h2>
          <ul>
            <li>
              <a href="#">
              <RiWhatsappFill size={30}/>
                <span>+asdasdasd</span>
                </a>
            </li>
            <li>
              <a href="#">
              <RiMailFill size={30}/>
                <span>asdasdasd</span>
              </a>
            </li>
            <li>
              <a href="#">
              <RiMapPin2Fill size={30}/>
                <span>asdasdsadsa</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='supportFormRight'>
          <form>
            <label>
              <span>Name:</span>
              <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
            </label>
            <label>
              <span>E-mail:</span>
              <input type="text" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
            </label>
            <label>
              <span>Message:</span>
              <textarea cols={20} rows={10} value={message} onChange={event => setMessage(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export {Support}