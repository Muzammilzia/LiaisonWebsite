import emailjs from 'emailjs-com'
import { useState } from "react";

export const ConsultationForm = (props) => {
    const {clicked,data , data1, data2, data3, plan, setPlan} = props;
    // console.log(plan)
    // console.log(setPlan)
    // console.log(data1)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ystwj8a', 'template_vya1tzk', e.target, 'HYNHlfHFScvrdRaLK')
        .then((result) => {
            setName('')
            setEmail('')
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    // const HandleSubmit = (e) => {
    //   e.preventDefault()
    //   console.log(name, email, plan)
    // }
    
    return(
        <div className={clicked ? 'MainForm ': 'MainFormHide'}
        >
          <div style={{width: '50%'}}>
            <h3 style={{margin: '2px'}}>Get Consultation</h3>
            <p style={{margin: '2px'}}>Submit the below form with your email and we will contact you</p>
          </div>
          <form onSubmit={(e => sendEmail(e))}>
              <label>
                <span>Name:</span>
                <input type="text" name="name" placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
              </label>
              <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder='Email' value={email} onChange={event => setEmail(event.target.value)}/>
              </label>
              <label>
                <span style={{marginBottom: "10px"}}>plan :</span>
                <select value={plan} name="plan" onChange={event => setPlan(event.target.value)}>
                  {data.map((data, index) => {
                    const {text, Icon} = data
                    return <option value={text}>{text}</option>
                  })}
                  {data1 && data1.map((data, index) => {
                    const {heading, Icon} = data
                    return <option value={heading}>{heading}</option>
                  })}
                  {data2 && data2.map((data, index) => {
                    const {heading, Icon} = data
                    return <option value={heading}>{heading}</option>
                  })}
                  {data3 && data3.map((data, index) => {
                    const {heading, Icon} = data
                    return <option value={heading}>{heading}</option>
                  })}
                </select>
              </label>
              <input type="submit" value="Submit" style={{borderRadius: "1rem"}}/>
            </form>
        </div>
    )
}