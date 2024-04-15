import React from 'react';
import Header from '../components/header';
import './Home.css';
import CarPark from '../assets/CarPark.png'; // Adjust the path accordingly
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <Header />
      <div className="scrollable-container">

        <div className="heading-belief-container">
          <div className="heading-container">
            <h1 className="heading">
              Seamless Parking Solutions: Transforming Spaces, Enhancing Journeys.
            </h1>
          </div>
          <div className="image-container">
            <img src={CarPark} alt="CarPark" className="carpark-image" />
          </div>
          <div className="belief-container">
            <p className="belief">
              <strong>What We Believe In:</strong> We believe in developing a Smart Parking Management System that efficiently manages parking spaces, automates the process of parking slot allocation, and provides a seamless experience for both parking space owners and vehicle owners.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
