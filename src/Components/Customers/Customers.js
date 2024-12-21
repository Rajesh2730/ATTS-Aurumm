import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Customers.css"; // Custom CSS for carousel animation

const Customers = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check the screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Mobile or tablet device
      } else {
        setIsMobile(false); // Desktop
      }
    };

    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [
    "https://aurumm.co/_next/static/media/client1.a6ce8334.png",
    "https://aurumm.co/_next/static/media/client2.375a298f.png",
    "https://aurumm.co/_next/static/media/client3.bb1326d9.png",
    "https://aurumm.co/_next/static/media/client4.ae1b0ded.png",
    "https://aurumm.co/_next/static/media/client5.e84cda3c.png",
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h2>Our Clients</h2>
          <h1>Brand That Trust Us!</h1>
        </Col>
        <Col xs={12}>
          <div className={`logo-carousel ${isMobile ? "mobile" : ""}`}>
            <div className="carousel-inner">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="logo-item">
                  <img src={logo} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Customers;
