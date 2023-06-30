import React from 'react'
import contact from "../img/contact-img.svg"
import "animate.css"
import TrackVisibility from 'react-on-screen'
import "./Contact.css"

function Contact() {
  return (
      <section className='contact' id='contact'>
        <div className=' container'>
            <div className='contact-info d-row  '> 
                <TrackVisibility className='visible col-sm-12 col-lg-5'>
                {({isVisible})=>
                  <div className={isVisible?"contact-img animate__animated animate__zoomIn":" contact-img"}>
                    <img src={contact} alt="" /> </div>
                }
                </TrackVisibility>
                <div className='contact-form col-sm-12 col-lg-6 '>  
                 <h2>Get In Touch</h2>
                    <form className=''>
                        <input className='' type='text' placeholder='First Name' />
                        <input className='   ' type='text' placeholder='Last Name' />
                        <input className=' ' type='tel' placeholder='Phone No.' />
                        <input className='  ' type='email' placeholder='Email Address' />
                        <textarea className=' ' type='text' placeholder='Message'/>
                    </form>
                     <div> <button className='contact-send' ><span>Send</span></button></div> 
                </div>       
            </div>
            

        </div>
      </section>
  )
}

export default Contact
