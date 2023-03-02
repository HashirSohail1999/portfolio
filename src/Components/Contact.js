import React from 'react'
import Form from './Form'
import Socails from './Socails';
import Potrait from './IMG/Potrait.jpg'
import {FaMailBulk,FaPhoneAlt} from 'react-icons/fa';
function Contact() {
  return (
    <div className="Contact">
        <Socails></Socails>
        <Form></Form>     
        <div className='ContactInfo'>
        <img className='Potrait' src={Potrait} alt="pota"/>
          <FaMailBulk style={{color:"#fff",fontSize:'25px',display:'inline',margin:"0px 5px"}}></FaMailBulk>
          Email:<br></br>
          <div style={{color:"#fff",fontWeight:'bold',display:'inline'}}>
          syedhashirsohail@gmail.com</div>
          <br></br><br></br>
          <FaPhoneAlt style={{color:"#fff",fontSize:'25px',display:'inline', margin:"0px 5px"}} ></FaPhoneAlt>Phone:
          <br></br>
          <div style={{color:"#fff",fontWeight:'bold',display:'inline'}}>03133130971 </div>
        </div>
    </div>
  )
}

export default Contact