import React from 'react'
import Skillbox from './Skillbox';
import reacti from './SVG/react.svg';
import css from './SVG/css.svg';
import git from './SVG/git.svg';
import github from './SVG/github.svg';
import html from './SVG/html.svg';
import javascript from './SVG/javascript.svg';
import mongodb from './SVG/mongodb.svg';
import sql from './SVG/sql.svg';
import programming from './IMG/programming.jpg'
import courses from './IMG/Courses.jpg'
import python from './SVG/python.svg'
import c from './SVG/c.svg'
import java from './SVG/java.svg'

function Skills() {
  return (
    <div className='SkillsPage'>

        <h1>SKILLS</h1>
        <div className='Skills'>

            <Skillbox image={reacti} course={`React.JS`}></Skillbox>
            <Skillbox image={sql} course={`SQL`}></Skillbox>
            <Skillbox image={css} course={`CSS`}></Skillbox>
            <Skillbox image={html} course={`HTML`}></Skillbox>
            <Skillbox image={github} course={`Github`}></Skillbox>
            <Skillbox image={git} course={`GIT`}></Skillbox>
            <Skillbox image={mongodb} course={`Mongodb`}></Skillbox>
            <Skillbox image={javascript} course={`Javascript`}></Skillbox>
            

           
        </div>

        <h1>LANGUAGES </h1>
        <div className='Skills'>
        
            <Skillbox image={javascript} course={`JAVASCRIPT`}></Skillbox>
            <Skillbox image={c} course={`C++`}></Skillbox>
            <Skillbox image={java} course={`JAVA`}></Skillbox>
            <Skillbox image={python} course={`PYHTON`}></Skillbox>

        </div>

        <h1>NOTABLE COURSES</h1>
        <div className='Courses'>
            <div >
                <ul className='CoursesBullet'>
                    <li>OOP - Object Oriented Programming</li>
                    <li>DSA - Data Structure and Algorithm</li>
                    <li>DBMS- Database Management Systems</li>
                    <li>NN- Neural Network</li>
                    <li>DAA - Design and Analysis of Algorithms</li>
                    <li>SE - Software Engineering</li>
                    <li>AI - Artificial Intelligence</li>
                    <li>WE - Web Engineering</li>
                    <li>BDS – Basic Data Science</li>
                    <li>DM – Data mining</li>
                    <li>DCN- Data Communication and Networking</li>
                    <li>SQA - Software Quality Assurance</li>
                    <li>ENT - Entrepreneurship</li>
                </ul>
                <img src={courses} className="SkillsImage" alt=""></img>
            </div>
            
        </div>

        <h1>WORK EXPERIENCE</h1>
        <div className='WorkExperience'>
            <div >
                    
                    <div>
                  
                    <h2>Freelancing- Fiverr</h2>
                    <div>2020-2022</div>
                    <div>Freelance Content Writer, I wrote about the tech niche, hardware and crypto.</div>
                    <br></br>
                    <br></br>
                    <h2>LI Call Center - Marketing Agent</h2>
                    <div>For 6 Months</div>
                    <div>Did marketing for products and sales with international clients and customers. </div>
                    </div>
                    <img className="SkillsImage"src={programming} alt=""></img>
            </div>   
        </div>
    </div>
  )
}

export default Skills