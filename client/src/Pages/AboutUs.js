import React from 'react';
import Header from '../components/header';
import './AboutUs.css'; // Ensure to adjust the CSS file path accordingly
import Members from '../components/memebrs';


function AboutUs() {
  return (
    <div className='screen'>
    <div>
      <Header />

      <div className="about-us-container">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-description">
          At our core, we are driven by the vision of revolutionizing the parking industry through innovation and technology. We believe in the power of smart solutions to address the challenges faced by both parking space owners and vehicle owners alike.
        </p>
        <p className="about-us-description">
          Our mission is to develop a comprehensive Smart Parking Management System that goes beyond traditional methods. Our system is designed to efficiently manage parking spaces of all sizes, from small lots to large complexes, optimizing every inch of available space.
        </p>
        <p className="about-us-description">
          Through automation, our system streamlines the process of parking slot allocation, eliminating the hassle of manual interventions and minimizing the time spent searching for parking. By leveraging cutting-edge technology such as real-time data analytics and sensor networks, we ensure a seamless and convenient experience for all stakeholders.
        </p>
        <p className="about-us-description">
          We are committed to sustainability and environmental responsibility. By reducing congestion and emissions associated with circling for parking, our solution contributes to a greener, more sustainable future for urban environments.
        </p>
        <p className="about-us-description">
          Above all, we are dedicated to customer satisfaction. We strive to exceed expectations by providing reliable, user-friendly solutions backed by exceptional customer support. Our goal is to empower parking space owners to maximize their assets and enhance the journeys of vehicle owners, creating a win-win situation for all.
        </p>
      </div>
      <Members/>
      </div>
    </div>

  );
}

export default AboutUs;
