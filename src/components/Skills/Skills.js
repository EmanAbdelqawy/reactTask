import React from 'react'
import {Carousel} from "react-bootstrap";
import skill1 from "../img/meter1.svg"
import skill2 from "../img/meter2.svg"
import skill3 from "../img/meter3.svg"
import colorSharp from "../img/color-sharp.png"
import "../Skills/Skills.css"
function Skills() {
  return (
    <section className='' id="skills">
    <div className='sec-skill'> 
    <div className=' main-skill '>
       <h1 className='skill text-center'>Skills</h1>
       <p className='text-center'>You Can See My Skills Here</p>
       <Carousel className='carousel '>
      <Carousel.Item>
        <div className='d-flex car-item '>
          <div className='win'>
             <img className="" src={skill1} alt="First slide"/>
             <p className='text-center '>Front End</p>
        </div>
        <div className='second'>
            <img className=" " src={skill3} alt="First slide"/>
            <p className='text-center '>Back End</p>
         </div>
         <div className='third'>
              <img className=" " src={skill2} alt="First slide"/>
              <p className='text-center '>Web Development</p> </div>
        </div>
    </Carousel.Item>
           <Carousel.Item>
        <div className='d-flex car-item'>
          <div className='win'>
             <img className="" src={skill2} alt="First slide"/>
             <p className='text-center '>Vanilla Js</p>
        </div>
        <div className='second'>
            <img className="" src={skill3} alt="First slide"/>
            <p className='text-center '>React</p>
         </div>
         <div className='third'>
              <img className=" " src={skill1} alt="First slide"/>
              <p className='text-center '>Bootstrap</p>       
           </div>
        </div>
      </Carousel.Item>
            <Carousel.Item>
        <div className='d-flex car-item'>
          <div className='win'>
             <img className="" src={skill3} alt="First slide"/>
             <p className='text-center '>Data Science</p>
        </div>
        <div className='second'>
            <img className="" src={skill1} alt="First slide"/>
            <p className='text-center '>Data Base</p>
         </div>
         <div className='third'>
              <img className="" src={skill2} alt="First slide"/>
              <p className='text-center '>Data Structure</p> </div>
        </div>
      </Carousel.Item>
        </Carousel>
    </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
    </div> 
    </section>
  )
}

export default Skills;
