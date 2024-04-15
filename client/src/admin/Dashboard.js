import React from 'react';
import Aheader from './Aheader';
import './dashboard.css';

function AdminDashboard() {
  return (
    <div>
      <Aheader />
      <div className="admin-dashboard">
        <div className="container-wrapper">
          <div className="profile-container">
            <h2>Profile</h2>
            <img src="path_to_your_image" alt="Profile" />
            <div className="profile-info">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
            </div>
          </div>
          <div className="monitoring-container">
            <h2>Monitoring & Permissions</h2>
            <div className="button-container">
              <button>Parking Status</button>
              <button>Manage Accounts</button>
              <button>Permissions</button>
            </div>
          </div>
          <div className="logs-container">
            <h2>Logs/History</h2>
            <div className="button-container">
              <button>User Logs</button>
              <button>Sensor Logs</button>
              <button>Payment History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
