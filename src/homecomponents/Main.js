import React, { useState } from 'react';
import CardForm from './CardForm';
import { CardData } from './data';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

const Main = () => {
  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('Your E-mail');
  const [plan, setPlan] = useState('');

    const [current, setCurrent] = useState(-1);
    const [clicked, setClicked] = useState(false);
  return (
    <div className='Main'>
        <AnimatedOnScroll animationIn="bounceInLeft">
        <h1>PAKISTAN’S LARGEST ECOMMERCE NETWORK</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="bounceInLeft">
        <div className='innerMain' >
            {CardData.map((data, index)=> {
                const { text, Icon } = data;
                return <CardForm key={index} value={index} text={text} Icon={Icon} current = {current} setCurrent = {setCurrent} clicked = {clicked} setClicked = {setClicked} setPlan = {setPlan}/>//</button> 
            })}
        </div>
        </AnimatedOnScroll>
        <div className={clicked ? 'MainForm ': 'MainFormHide'}
        >
          <div style={{width: '50%'}}>
            <h3 style={{margin: '2px'}}>Get Consultation</h3>
            <p style={{margin: '2px'}}>Submit the below form with your email and we will contact you</p>
          </div>
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
                <span>plan :</span>
                <select value={plan} onChange={event => setPlan(event.target.value)}>
                  <option value="Private Label">Private Label</option>
                  <option value="Wholesale FBA">Wholesale FBA</option>
                  <option value="Amazon">Amazon</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
    )
}

export default Main