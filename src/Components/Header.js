import React from 'react'
import logo from './SVG/logo.svg'
import {  FaBars } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [mvar, setmvar] = useState(false)
    function click() {
            setmvar(!mvar)
    }
  return (
    <div className='header'>
        <div className='pill'>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Site-name"> HASHIR<div className='dot'>.</div></div>
        </div>
        <div className='menu'>
          <Link onClick={click} className='link' to={"/"}>Home</Link>
          <Link onClick={click} className='link' to={"/skills"}>skills</Link>
          <Link onClick={click} className='link' to={"/contact"}>contact</Link>
        </div>
    <FaBars className='bars'
    onClick={click}
    ></FaBars>
      {(mvar && 
        <div className='menu-mob'>
        <Link onClick={click} className='link' to={"/"}>Home</Link>
        <Link onClick={click} className='link' to={"/skills"}>skills</Link>
        <Link onClick={click} className='link' to={"/contact"}>contact</Link>
        </div>
    )}
  </div>
  )
}

export default Header