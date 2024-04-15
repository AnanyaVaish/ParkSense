import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home'; // Import your Home component
import Aboutus from './Pages/AboutUs';
import Feedback from './Pages/Feedback';
import ContactUs from './Pages/Contactus';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import AdminDashboard from './admin/Dashboard';
import ClientDashboard from './client/Dashboard';
import CustomerDashboard from './customer/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<Aboutus/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/client/dashboard" element={<ClientDashboard/>}/>
          <Route path="/customer/dashboard" element={<CustomerDashboard/>}/>

=        </Routes>
      </div>
    </Router>
  );
}

export default App;
