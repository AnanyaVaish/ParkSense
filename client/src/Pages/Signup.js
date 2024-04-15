import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import Header from '../components/header';

function SignUp() {
  const [formData, setFormData] = useState({
    usernameOrPhone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    usernameOrPhone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Validation
    let errorMessage = '';
    switch (name) {
      case 'usernameOrPhone':
        errorMessage = /^[a-zA-Z0-9]+$/.test(value) ? '' : 'Username must contain only letters and numbers';
        break;
      case 'email':
        errorMessage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
        break;
      case 'password':
        errorMessage = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[^\s]).{8,}$/.test(value) ? '' : 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
        break;
      case 'confirmPassword':
        errorMessage = value === formData.password ? '' : 'Passwords do not match';
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    let hasErrors = false;
    const validationErrors = {};
    for (const [key, value] of Object.entries(formData)) {
      switch (key) {
        case 'usernameOrPhone':
          validationErrors[key] = /^[a-zA-Z0-9]+$/.test(value) ? '' : 'Username must contain only letters and numbers';
          break;
        case 'email':
          validationErrors[key] = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
          break;
        case 'password':
          validationErrors[key] = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[^\s]).{8,}$/.test(value) ? '' : 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
          break;
        case 'confirmPassword':
          validationErrors[key] = value === formData.password ? '' : 'Passwords do not match';
          break;
        default:
          break;
      }
      if (validationErrors[key]) {
        hasErrors = true;
      }
    }
    setErrors(validationErrors);

    if (!hasErrors) {
      console.log(formData);
      // Here you would typically send the form data to your backend for processing
      // and handle any response accordingly
    }
  };

  return (
    <div className='screen'>
      <Header />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="usernameOrPhone">Username:</label>
            <input
              type="text"
              id="usernameOrPhone"
              name="usernameOrPhone"
              value={formData.usernameOrPhone}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
            {errors.usernameOrPhone && <span className="error">{errors.usernameOrPhone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email or Phone:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email or phone number"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
