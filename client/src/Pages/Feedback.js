import React, { useState } from 'react';
import Header from '../components/header';
import './feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here (e.g., sending feedback to server)
    console.log('Feedback submitted:', feedback);
    // Reset feedback state after submission
    setFeedback('');
  };

  return (
    <div className='screen'>
      <Header/>
    <div className="feedback-container">
      <h2>Give Us Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="5"
            value={feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default Feedback;
