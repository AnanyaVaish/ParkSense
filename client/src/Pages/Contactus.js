import React from 'react';
import Header from '../components/header';
import './contactus.css'

const ContactUs = () => {
  return (
    <div className='screen'>
      <Header title="Contact Us" />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Address: 123 Smart Parking Street, City, Country</p>
          <p>Email: contact@smartparking.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
