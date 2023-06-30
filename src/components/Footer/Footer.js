import React from 'react'
import "./Footer.css"
import { Nav ,Container} from "react-bootstrap";
import logo from "../img/logo.svg"
import {FaLinkedinIn ,FaFacebookF ,FaInstagram} from "react-icons/fa";

function Footer() {
  return (
    <section className='footer-footer '>
    <footer className='container'>
            <div className=' foot-bxbx '>
                <div className=' foot-bx'>
                     <p className='col-md-12 col-lg-5 '>See My Projects Then 
                        You Can Leave Here Your Email Address . </p>
                    <div className='foot-sub col-12 col-lg-7 '>
                    <input type='text' placeholder='Email Address Here' className=' col-sm-6 col-lg-7'/>
                     <button type='submit' className='col-sm-5 col-lg-4'>Submit</button>
                    </div>     
                </div>
            </div>
           <div className='foot-nav '> 
      <div className='foot-away'>
         <div className='col-lg-2 col-sm-2'>
              <img className='brand ' src={logo} alt="logo"/>  
         </div>
            <div className=' nav-icon d-flex d-row me-4'>
                            <div className="icon-div ">
                    <Nav.Link href="https://www.linkedin.com/in/eman-abdelqawy-b9a604264/">
                    <FaLinkedinIn className="fa-icon"/></Nav.Link></div> 
                <div className="icon-div">
                    <Nav.Link href="#">
                    < FaFacebookF className="fa-icon"/>
                    </Nav.Link></div>
                <div className="icon-div"> <Nav.Link  href="#">
                    <FaInstagram className="fa-icon"/></Nav.Link></div>   
             </div> 
            </div>
             <div className='ms-auto me-4'>
                <p className='p-end'>--Copyright 2022. All Rights Reserved--</p>
            </div>
        </div>  
    </footer>
    </section>
  )
}

export default Footer
