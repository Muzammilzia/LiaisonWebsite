import React from 'react'


const CardForm = (props) => {
  const {text, icon, current, setCurrent, value, clicked, setClicked, setPlan, key } = props;
  return (
    <div className='Card'  onClick = {()=> {setCurrent( (prevState) => {
      if(prevState === value){
        setClicked(!clicked)
      }else{
        setClicked(true)
      }
      setPlan(`${text}`)
      return value
    })}}>
      {console.log(current)}
      <img src= {icon} className="icon"/> 
      <h1>{text}</h1>
      <input 
        type="radio" 
        value= {value} 
        className= "dotCard" 
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