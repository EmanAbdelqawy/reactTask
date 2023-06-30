import React from 'react'
import card1 from "../img/project-img1.png"
import card2 from "../img/project-img2.png"
import card3 from "../img/project-img3.png"
import "./projects.css"

function ProjectCards() {
  return (
    <div className='mt-5 '>
     <div className='main-box d-flex flex-wrap gap-4'>
      <div className='card  col-md-4 col-lg-3 col-8' >
          <img className='' src={card1} alt=""/> 
         <div className='inn text-center'>
           <h2>Business StartUp</h2>
          <p>Design && Development</p>
        </div>  
        </div>
          <div className='card  col-md-4 col-lg-3 col-8' >
          <img className='' src={card2} alt=""/> 
         <div className='inn text-center'>
           <h2>Business StartUp</h2>
          <p>Design && Development</p>
        </div> 
        </div> 
          <div className='card  col-md-4 col-lg-3 col-8' >
          <img className='' src={card3} alt=""/> 
         <div className='inn text-center'>
           <h2>Business StartUp</h2>
          <p>Design && Development</p>
        </div>  
        </div>
              <div className='card  col-md-4 col-lg-3 col-8' >
          <img className='' src={card1} alt=""/> 
         <div className='inn text-center'>
           <h2>Business StartUp</h2>
          <p>Design && Development</p>
        </div>  
        </div>
          <div className='card  col-md-4 col-lg-3 col-8' >
          <img className='' src={card2} alt=""/> 
         <div className='inn text-center'>
           <h2>Business StartUp</h2>
          <p>Design && Development</p>
        </div> 
        </div> 
          <div className='card  col-md-4 col-lg-3 col-8' >
          <img className='' src={card3} alt=""/> 
         <div className='inn text-center'>
           <h2>Business StartUp</h2>
          <p>Design && Development</p>
        </div>  
        </div>
      
     </div>
    </div>
  )
}

export default ProjectCards



