import React from 'react';
import Pheader from './Pheader';
import './dashboard.css'

function ClientDashboard() {
  return (
    <div>
      <Pheader />
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
              <input type="text" placeholder="Name of Parking Space" />
              <input type="text" placeholder="Address of Parking Space" />
            </div>
          </div>
          <div className="parking-data-container">
            <h2>Parking Space Data</h2>
            <div className="button-container">
              <button>View and Manage Reservations by Customers</button>
              <button>Real Time Data on Parking Space Availability</button>
            </div>
          </div>
          <div className="transactions-container">
            <h2>Transactions and history</h2>
            <div className="button-container">
              <button>View Past Parking Transactions</button>
              <button>View Payment Tracsaction History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;
