import React from 'react'
import Socails from './Socails';
import reacti from './SVG/react.svg';
import Netflix from './IMG/Netflix.jpg'
import Todos from './IMG/Todos.jpg'
import Store from './IMG/Store.jpeg'
import ComingSoon from './IMG/ComingSoon.jpeg'
import Potrait from './IMG/Potrait.jpg'
import Project from './Project'

function Home() {

  return (
    <div className='home'>

       

      <div className='name'>
      <img className='Potrait' src={Potrait} alt="pota"/>
                Hey, I'am{" "}
                <div style={{color:"#ff7b00",fontWeight:'bold',display:'inline'}}>
                Hashir</div><br></br>
                a <div style={{color:"#14cff0",fontWeight:'bold',display:'inline'}}>
                React.js
                <img src={reacti} className="logoinname" alt="logo" />
                </div>
                <div style={{color:"#ff7b00",fontWeight:'bold'}}> Front End Developer</div>
        </div>
        <div className='Projects'>
        
        <a href="https://netflixclone1999.web.app/" className='ProjectBox' target="_blank" rel="noreferrer">
        <Project title='Netflix' photo={Netflix}></Project>
        </a>

        <a href="https://netflixclone1999.web.app/" className='ProjectBox' target="_blank" rel="noreferrer">
        <Project title='Store' photo={Store}></Project>
        </a>
        
        <a href="https://netflixclone1999.web.app/" className='ProjectBox' target="_blank" rel="noreferrer">
        <Project title='Todolist' photo={Todos}></Project>
        </a>

        <a href="https://netflixclone1999.web.app/" className='ProjectBox' target="_blank" rel="noreferrer">
        <Project title='InProgress' photo={ComingSoon}></Project>
        </a>
             

      </div>
       <Socails></Socails>
    </div>
  )
}

export default Home