import React from 'react';
import Header from './header';
import './dashboard.css'

function CustomerDashboard() {
  return (
    <div>
      <Header/>
      <div className="admin-dashboard">
        <div className="container-wrapper">
          <div className="profile-container">
            <h2>Profile</h2>
            <img src="path_to_your_image" alt="Profile" />
            <div className="profile-info">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              {/* Additional text fields */}
              <input type="text" placeholder="Car Number" />
              <input type="text" placeholder="Model Make" />
            </div>
          </div>
          <div className="reserve-search-container">
            <h2>Reserve/Search Parking Space</h2>
            <div className="button-container">
              <button>Reserve Parking Space</button>
              <button>Search Nearby Parking Spaces</button>
            </div>
          </div>
          <div className="transactions-container">
            <h2>Transactions and history</h2>
            <div className="button-container">
              <button>View Past Parking Transactions</button>
              <button>View Payment Transaction History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
