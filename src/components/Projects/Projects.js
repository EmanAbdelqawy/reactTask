import React,{useState } from 'react'
import  "./projects.css"
import ProjectCards from './ProjectCards';
import { Route,Routes,NavLink } from 'react-router-dom';
import Para from "../Para"



function Projects() {
 const[activeSec,setActiveSec] = useState("first-sec")

  const changeColor=(value)=>{
     if(activeSec == "sec-sec" || activeSec == "third-sec" ){
        setActiveSec(value)
     }else{
      setActiveSec("")
     }
  }   

  return (
    <section id="projects">
        <div className='text-center main-project'>
          <div className='container'>
          <div className='project'>
            <h1> My Projects</h1>
            <p className='repeated'>My Name is Eman , I Live in Mansoura ,
                 This is My First Project in React<p> Dev .</p></p>
           </div>       
            <div className="btns-bar bg-dark">
           <NavLink id='first-sec' className={activeSec=="first-sec"?"active btn-bar":"btn-bar"} to="/projectcards"
           onClick={changeColor}> <button className= "">1st Section</button>  </NavLink> 
          <NavLink id='sec-sec' className={activeSec=="sec-sec"?"active btn-bar":"btn-bar"} to="/contact"
          onClick={changeColor}> <button className="" >1nd Section</button>  </NavLink> 
           <NavLink id='third-sec' className={activeSec=="third-sec"?"active btn-bar":"btn-bar"} to="/para"
           onClick={changeColor}> <button className="" >1rd Section</button></NavLink>
            </div>
             </div> 
              {/* <ProjectCards /> */}
              <Routes>
                <Route path='/projectcards' element={<ProjectCards/>} />
                {/* <Route path='/contact' element={<Contact/>} /> */}
                <Route path='/para' element={<Para/>}/>
             </Routes>
          </div>
    </section>
  )
}

export default Projects
