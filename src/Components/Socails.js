import React, { useState } from 'react'
import {FaFacebookF,FaLinkedinIn,FaGithub,FaMailBulk,FaWhatsapp} from 'react-icons/fa'

function Socails() {

    const [focusnum, setfocusnum] = useState(false)
    const [focusemail, setfocusemail] = useState(false)

  return (
    <div className='Socials'>
                  
        <a href="https://www.facebook.com/hr.iqbal.52/" target="_blank" rel="noreferrer">
        <FaFacebookF  className='icon'></FaFacebookF>
        </a>

        <a href="https://www.linkedin.com/in/hashir-sohail-497a391a6/" target="_blank" rel="noreferrer">
        <FaLinkedinIn className='icon'></FaLinkedinIn>
        </a>

        <a href="https://github.com/HashirSohail1999" target="_blank" rel="noreferrer">
        <FaGithub className='icon'></FaGithub>
        </a>
        
        <div className='CopiedBox' 
        onClick={() => {
        navigator.clipboard.writeText(`03133130971`);
        !focusnum&&setfocusnum(true);
        setTimeout(()=>setfocusnum(false), 800);
        }}
        > 
        <FaWhatsapp className='icon'>
        </FaWhatsapp>
        {(focusnum)&&<div className='CopiedPopup'>Copied</div>}
        </div>

        <div className='CopiedBox' 
        onClick={() => {
        navigator.clipboard.writeText(`syedhashirsohail@gmail.com`);
        !focusemail&&setfocusemail(true);
        setTimeout(()=>setfocusemail(false), 800);
        }}
        >
        <FaMailBulk 
        className='icon'>
        </FaMailBulk>
        {(focusemail)&&<div className='CopiedPopup'>Copied</div>}
        </div>
    
    </div>
  )
}

export default Socails