import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import ParkSense from '../assets/ParkSense.png';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/home">
            <img src={ParkSense} alt="ParkSense" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
            <li><Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
            <li><Link to="/feedback" className={location.pathname === '/feedback' ? 'active' : ''}>Feedback</Link></li>
            <li><Link to="/login" className={location.pathname === '/login' || location.pathname === '/signup' ? 'active' : ''}>Login/SignUp</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
