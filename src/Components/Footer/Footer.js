import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'
import Logo from '../../Assets/Logo.png'

const Footer = () => {
  return (
    <footer className="footer text-dark py-4">
      <Container>
        <hr/>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <a href="/ATTS-Aurumm">
            <img src={Logo} alt="Aurumm" />
            </a>
            <p>
            World-class technical solutions for elevated jewellery store operations.
            </p>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/ATTS-Aurumm" className="text-dark text-decoration-none">Home</a>
              </li>
              <li>
                <a href="/Service-AuPay" className="text-dark text-decoration-none">Services</a>
              </li>
              <li>
                <a href="/Contact-Us" className="text-dark text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>

          <Col md={4} sm={12} className="mb-3">
            <h5>Contact Us</h5>
            <p className="mt-3">
              <strong>Email:</strong> support@atts.in<br />
              <strong>Contact:</strong> 0422 4957575<br /> 
            </p>
          </Col>
        </Row>
            <hr/>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
                Aurumm made by <strong>ATTS Technologies</strong>.All Rights Reserved &copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
