import { useState ,useEffect } from "react";
import {Navbar , Nav ,Container} from "react-bootstrap";
import logo from "../img/logo.svg";
import {FaLinkedinIn ,FaFacebookF ,FaInstagram} from "react-icons/fa";
import "../NavBar/NavBar.css";



function NavBar() {
  const [scroll,setScroll] = useState(false)
  const [activeLink,setActiveLink] = useState("home")
  useEffect (()=>{
    const onScroll=()=>{
   if(window.scrollY > 50){
    setScroll(true)
   }else{
    setScroll(false)
   }}
     window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  },[])
  const onActiveLink = (value)=>{
    setActiveLink(value)
  }
  return (
    <div className="">
      <Navbar className={scroll?"Nav-nav scrolled-nav":"Nav-nav "} collapseOnSelect expand="lg"  >
      <Container>
        <Navbar.Brand href="#"><img className='nav-brand' src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="div-links">
            <Nav.Link href="#home" className={activeLink=='home'?"active nav-link ":'nav-link'}
            onClick={()=>onActiveLink}>Home </Nav.Link>
            <Nav.Link href="#skills" className={activeLink=='skills'?"active nav-link ":'nav-link'}
            onClick={onActiveLink}>Skills </Nav.Link>
            <Nav.Link href="#projects"  className={activeLink=='projects'?"active nav-link ":'nav-link'}
            onClick={()=>onActiveLink}>projects </Nav.Link>
          </Nav>
            <Nav className='ms-auto'>
            <div className=' nav-icons d-flex d-row col-sm-4 '>
                <div className="icons-div"><Nav.Link href="https://www.linkedin.com/in/eman-abdelqawy-b9a604264/">
                    <FaLinkedinIn className="fa-icon"/></Nav.Link></div> 
                <div className="icons-div"><Nav.Link href="#">
                    < FaFacebookF className="fa-icon"/></Nav.Link></div>
                <div className="icons-div"> <Nav.Link  href="#">
                    <FaInstagram className="fa-icon"/></Nav.Link></div>
            </div> 
           <button className='nav-btn ms-3'><span>Let’s Connect</span></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>
    </div>
  )
}

export default NavBar
