import React from 'react'
function Project(props) {
  return (
    <div className='tohitthettile'>
    <img className='Project' src={props.photo} alt="pota"/>
    <div className='ProjectTitle'>{props.title}</div>
    </div>
  )
}

export default Project