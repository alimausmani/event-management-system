import React,{useState} from 'react';
import './Contact.css';
import axios from 'axios';
const Contact = () => {
   const [foamData,setFamData]=useState({})
  const postData=async(e)=>{
    e.preventDefault();
    let str = "";
    for (let x in foamData) {
      str += `${x.toUpperCase()} : ${foamData[x]} \n`;
    }
    try{
      const response = await axios.post(
        "https://discord.com/api/webhooks/1264668555857625170/mF0Nn9s_Um_-kljyhtkfP9if7pxw-otcVO0FD4R0KhYl9tNGALMwpcpeznDN7GT82C89",
  
        {
          content: str,
        }
      );
      console.log(response);
      window.location.reload();
    }catch(e){
console.log(e)
    }
  }
const handlChange=(e)=>{
  setFamData({...foamData, [e.target.name]: e.target.value });
}
  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <div className="image-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I5Hy8J6qoCukImq2YuuPHqtpuoC-MGp87chvNa3Tq1FiPzbgXkKktiNEttHr9uGVCxQ&usqp=CAU" alt="Illustration" />
        </div>
        
        <div className="form-container">
          <h2>Get In Touch</h2>
          <h1>Bringing Your Vision To Life</h1>
          <p>For your car we will do everything advice design in us repairs and maintenance. We are the some preferred.</p>
          <form onSubmit={postData}>
            <div className="input-group">
              <input type="text" placeholder="Your Name" name='name' onChange={handlChange} />
              <input type="text" placeholder="Your Email"  name ="email" onChange={handlChange}/>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Your Phone" name='phone' onChange={handlChange} />
              <input type="text" placeholder="Your Event" name='event' onChange={handlChange} />
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
