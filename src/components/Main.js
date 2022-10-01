import React, { useState } from 'react';
import CardForm from './CardForm';
import { CardData } from './data';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { useNavigate } from 'react-router-dom';
import { ConsultationForm } from './ConsultationForm';

const Main = () => {
  const [plan, setPlan] = useState('')
  const [current, setCurrent] = useState(-1);
  const [clicked, setClicked] = useState(false);
  let Navigate = useNavigate();
  return (
    <div className='Main'>
        <AnimatedOnScroll animationIn="bounceInLeft">
        <h1 style={{ display: "block",width: "100%", textAlign: "center", fontFamily: 'Roboto, sans-serif', color: 'rgb(124,124,124)'}}>E-Commerce Aspects</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="bounceInLeft">
        <div className='innerMain' >
            {CardData.map((data, index)=> {
                const { text, icon } = data;
                return <CardForm key={index} value={index} text={text} icon={icon} current = {current} setCurrent = {setCurrent} clicked = {clicked} setClicked = {setClicked} setPlan = {setPlan} />//</button> 
            })}
        </div>
        </AnimatedOnScroll>
        <ConsultationForm plan={plan} setPlan={setPlan} clicked={clicked} data = {CardData}/>
        <button onClick={() => Navigate("/TechMarketingSolutions/services")} style={{marginLeft: "45px", backgroundColor: "#f68338 ", color: "white", height: "40px", borderRadius: "1rem", border: "none",fontSize: "15px", fontWeight: "400"}}>Other Services </button>
    </div>
    )
}

export default Main