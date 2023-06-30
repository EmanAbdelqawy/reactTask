import React from 'react'
import headerImg from "../img/header-img.svg"
import { Typewriter } from "react-simple-typewriter";
import {FaRegArrowAltCircleRight}from "react-icons/fa"
import "./Banner.css"
import "animate.css"
import NavBar from "../NavBar/NavBar"

function Banner() {
   const text = [" FrontEnd Developer."," BackEnd Developer.", " FullStack Developer."]
  return (
        <section className="banner" id="home">
          <div className='container'>
             <NavBar/>
          </div>
            <div className=" container d-flex main flex-wrap">
                <div className="typing col-sm-10 col-lg-6">  
                  <span className="tag-line">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Eman Abdelqawy Nassar,`}
                  <span className='typewriter'>
                    <Typewriter 
                     words={text}
                     loop cursor cursorStyle="|" typeSpeed={100} deleteSpeed={100}  />
                     </span>
                      </h1>
                     <p> Hello Everyone , I have litle Experience in web Development </p>
                     <button>Let’s Connect  <  FaRegArrowAltCircleRight className="ms-4"/></button>
                </div>
              
              <div className="col-sm-6 col-lg-6 banner-img animate__animated animate__zoomIn repeat__1 col-sm-12 col-md-6"  >
                  <img className='col-sm-3' src={headerImg} alt="Header Img"/>
              </div>
            </div>
        </section>
  )
}

export default Banner
