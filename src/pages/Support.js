import React, { useState } from 'react'
import HeaderAbout from '../components/HeaderAbout'
import {RiWhatsappFill, RiMailFill, RiMapPin2Fill, RiPhoneFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'
const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ystwj8a', 'template_od1ja87', e.target, 'HYNHlfHFScvrdRaLK')
      .then((result) => {
          setName('')
          setEmail('')
          setMessage('')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div className='support'>
      <HeaderAbout height = {200}/>
      <div className='supportForm'>
        <div className='supportFormLeft'>
          {/* <h2>Find us at</h2> */}
          <ul>
            <li>
              <a
                href="https://wa.me/923149256022/?text=Hey!"
                data-action="share/whatsapp/share"  
                target="_blank"
              >
                <RiWhatsappFill size={30}/>
                <span>92-314-9256022</span>
              </a>
            </li>
            <li>
            <a
              href="#"
            >
                <RiPhoneFill size={30}/>
                <span>415-853-1482</span>
            </a>
            </li>
            <li>
              <a href="#">
                <RiMailFill size={30}/>
                <span onClick={() => window.location = 'mailto:liaisonec1@gmail.com'}>liaisonec1@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='supportFormRight'>
          <form onSubmit={(e)=> sendEmail(e)}>
            <label>
              <span>Name:</span>
              <input type="text" name="name" value={name} placeholder="Name" onChange={event => setName(event.target.value)}/>
            </label>
            <label>
              <span>E-mail:</span>
              <input type="text" name="email" value={email} placeholder="Email" onChange={event => setEmail(event.target.value)}/>
            </label>
            <label>
              <span>Message:</span>
              <textarea cols={20} rows={10} name="message" value={message} placeholder="Message..." onChange={event => setMessage(event.target.value)} />
            </label>
            <input type="submit" value="Submit" style={{borderRadius: "1rem"}}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export {Support}