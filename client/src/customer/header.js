import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ParkSense from '../assets/ParkSense.png';
import { FaCog } from 'react-icons/fa'; // Importing settings icon from react-icons/fa
// import './Pheader.css';

const Pheader = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
            <img src={ParkSense} alt="ParkSense" />
        </div>  
        <div className="settings">
          <Link to="/settings">
            <FaCog /> {/* Settings icon */}
          </Link>
        </div>   
        <div className="dashboard-link">
        <Link to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? 'active' : ''}>Dashboard</Link>
        </div>    
      </div>
    </header>
  );
}

export default Pheader;
