import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ReactPlayer from 'react-player';
import img1 from "./image/ballon.jpeg";

const HomePage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 15000); // Show message after 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="home-page">
      <video
        src="/background.mp4"
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}
        className="background-video"
      />
      <div className="tilt-card-container">
        <div className="tilt-card">
          <div className="tilt-card-content">
            <img src={img1} alt="Balloon" />
          </div>
        </div>
      </div>

      <div className="middle-content">
        {showMessage && (
          <>
            <h1 className="title animate__animated animate__fadeIn animate__delay-10s homecele wish"><p className='wish-qu'>🎉 Happy Birthday To you Dear 🎂</p></h1>
            <p className="subheading animate__animated animate__fadeIn animate__delay-10s wishqutoes">
              Celebrate and send the most heartwarming birthday wishes! 💖
            </p>
          </>
        )}
        <Link to="/birthday" className="wish-btn animate__animated animate__bounceIn">Click me 🎁</Link>
      </div>

      <div className="tilt-card-container">
        <div className="tilt-card">
          <div className="tilt-card-content">
            <img src={img1} alt="Balloon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
