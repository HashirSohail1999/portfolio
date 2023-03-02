import React from 'react'

function Skillbox(props) {
  return (
    <div className='Skillbox'>
            <img  src={props.image} alt=""></img>
            <div className='skillCourse'>{props.course}</div>
    </div>
  )
}

export default Skillbox