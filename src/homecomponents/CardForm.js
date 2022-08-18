import React from 'react'


const CardForm = (props) => {
  const {text, Icon, current, setCurrent, value, clicked, setClicked, setPlan } = props;
  return (
    <div className='Card'>
      <Icon className="icon" size={150} /> 
      <h1>{text}</h1>
      <input 
        type="radio" 
        value= {value} 
        className= "dot" 
        checked={current === value} 
        onClick = {()=> setClicked(!clicked)}
        onChange={
          event => setCurrent( () => {
            setClicked(true)
            setPlan(`${text}`)
            return(
              Number( event.target.value )
            )
          })
        }/>
    </div>
  )
}

export default CardForm