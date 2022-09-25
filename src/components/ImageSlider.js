import React, {useState, useEffect} from 'react'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
      const timeout = setTimeout(() => {
        if(current>= slides.length - 1){
          setCurrent(0)
        }else{
          setCurrent(current + 1);
        }
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }, [current]);

    return(
      <section className='imageSlider'>
        <AnimatedOnScroll animationIn = "bounceInRight">
          <div className='slider'>
            {slides.map((slide, index) => {
              return(
                <img src = {slide.image} alt = "" className='image' style={{transform: `translateX(-${current}00%)`}}/>
                ) 
              })}
          </div>
          <div className='dotscontainer'>
            {slides.map((slide, index) => {
              return <input type="radio" value= {index} className= "dot" checked={current === index} onChange={event => setCurrent( Number(event.target.value) )}/>
            })}
          </div>
        </AnimatedOnScroll>
      </section>
    )
}

export default ImageSlider