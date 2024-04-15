import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling
import Header from '../components/header';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login functionality here
    console.log('Logging in with:', emailOrPhone, password);
  };

  return (
    <div className='screen'>
                <Header/>
    
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email or Phone</label>
          <input
            type="text"
            placeholder="Enter your email or phone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
    </div>
  );
}

export default Login;
