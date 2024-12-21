import React , { useState }from 'react'
import './ContactUs.css'
import NavBar from '../NavBar/Navbar'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";



const ContactUs = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };

  return (
    <div>
        <NavBar/>
        <div className='banner-contact-us'>
            <h2 className='title'>Contact Us</h2>
            <div className='links'>
                <Link to='/ATTS-Aurumm'className='link' >Home</Link> <FaChevronRight/> &nbsp;
                <Link to='/Contact-Us'className='link' style={{color:"ActiveBorder"}} >Contact Us</Link>
            </div>
        </div>
        <div className='contact-container'>
            <div className='contact-title pt-4'>
                How Can We Help You ?    
            </div>
            <hr/>
            <div className='contact-content'>
                <div className='contact-details mb-3'>
                    <h1 className='pt-5 mb-3'>Start Today!</h1>
                    <p>Ready to take the leap? Come say hi, and we'll set things up!</p>
                    <h1 className='pt-5 mb-3'>Support Email</h1>
                    <p>support@atts.in</p>
                    <h1 className='pt-5 mb-3'>Media Contact's</h1>
                    <a href='https://www.instagram.com/aurumm_serv_soft/' target='_blank' style={{color:'black'}}>Instagram</a><br/>
                    <a href='https://www.facebook.com/people/Aurumm/61558187474609/' target='_blank' style={{color:'black'}}>Facebook</a>
                </div>
                <div className='contact-form'>
                
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            {/* Full Name */}
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label className='fw-bold'>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email Address */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className='fw-bold'>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Project Type Dropdown */}
            <Form.Group className="mb-3" controlId="projectType">
              <Form.Label className='fw-bold'>Project Type</Form.Label>
              <Form.Select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  --Select the Project Type--
                </option>
                <option value="AuPay">AuPay</option>
                <option value="AuSales">AuSales</option>
                <option value="AuShop">AuShop</option>
              </Form.Select>
            </Form.Group>

            {/* Budget */}
            <Form.Group className="mb-3" controlId="budget">
              <Form.Label className='fw-bold'>Budget</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3" controlId="message">
              <Form.Label className='fw-bold'>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="success" type="submit" className="w-100 mb-3">
              Submit
            </Button>
          </Form>
        
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactUs