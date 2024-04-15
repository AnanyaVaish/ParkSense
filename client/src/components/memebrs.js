import React from 'react';
import './members.css';
import Siddhant from '../assets/Siddhant.jpg';
import Rishabh from '../assets/Rishabh.jpg';
import Ananya from '../assets/Ananya.jpg';


const Members = () => {
  return (
    <div className="members-page">
      <div className="member-container">
      <img src={Ananya} alt="ParkSense" className="image" />
        <div className="member-details">
          <h2 className="names">Ananya Vaish</h2>
          <p className="position">Developer</p>
        </div>
        <p className="about">About: Ananya is an experienced developer with a passion for creating innovative solutions.</p>
      </div>
      <div className="member-container">
        <img src="member2.jpg" alt="Team Member 2" className="member-image" />
        <div className="member-details">
          <h2 className="names">Manami Maity</h2>
          <p className="position">Designer</p>
        </div>
        <p className="about">About: Manami is a talented designer who specializes in user interface design.</p>
      </div>
      <div className="member-container">
        <img src={Rishabh} alt="ParkSense" className="image" />
        <div className="member-details">
          <h2 className="names">Rishabh Pareek</h2>
          <p className="position">Marketing Manager</p>
        </div>
        <p className="about">About: Rishabh is a creative marketer with a knack for driving brand awareness.</p>
      </div>
      <div className="member-container">
        <img src={Siddhant} alt="ParkSense" className="image" />
        <div className="member-details">
          <h2 className="names">Siddhant Goel</h2>
          <p className="position">Project Manager</p>
        </div>
        <p className="about">About: Siddhant is an organized project manager who ensures timely delivery of projects.</p>
      </div>
    </div>
  );
};

export default Members;
