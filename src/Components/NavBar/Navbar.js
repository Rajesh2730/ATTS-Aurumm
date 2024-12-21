import React from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import Logo from '../../Assets/Logo.png'
import Logo1 from '../../Assets/symbol.2d89ec5c.svg'
import './Navbar.css'
import { FaArrowRightLong } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Navbar sticky='top' expand="lg" className="navbar">
        <Navbar.Brand href="/ATTS-Aurumm">
            <img src={Logo} alt='Aurumm' className='logo'/>
            <img src={Logo1} alt='Aurumm' className='logo1 mx-4'/>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvas-navbar" className='toggle'/>
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
          
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label"><img src={Logo} alt='Aurumm'/></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/ATTS-Aurumm" className='mx-4 px-4 fw-bold'>Home</Nav.Link>
              <Nav.Link href="#services" className='mx-4 px-4 fw-bold'>Services</Nav.Link>
              <Nav.Link href="/Contact-Us" className='mx-4 px-4 fw-bold'>Contact</Nav.Link>
              <Nav.Link href="/Contact-Us" className='demo mx-4 px-4 '>Free Demo <FaArrowRightLong/> </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Navbar>
  );
};

export default NavBar;
