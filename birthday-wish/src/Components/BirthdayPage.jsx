import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './BirthdayPage.css';
import img1 from "./image/IMG_20241110_021607.jpg"
import img2 from "./image/IMG_20241110_021629.jpg"
import img3 from "./image/IMG_20241110_021640.jpg"
import img4 from "./image/IMG_20241110_021655.jpg"
import img5 from "./image/IMG_20241110_021708.jpg"
import img6 from "./image/IMG_20241110_021725.jpg"
import img7 from "./image/IMG_20241110_021741.jpg"
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7
  ];

const BirthdayPage = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="birthday-page">
       <video
        src="backgroud2.mp4"
        autoPlay
        loop
        volume="1"
        style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }}
        className="background-video"
      />
      <div className="content">
        <p className="animated-message"><p className='wish-qu'>🎉 Happy Birthday  🎂</p></p>
        <p className="animated-submessage wishqutoes">Wishing you a year full of happiness and success! 🌟</p>

        <Slider {...sliderSettings} className="image-slider">
          {images.map((imgSrc, index) => (
            <div key={index} className="image-wrapper">
              <img src={imgSrc} alt={`Birthday Cake ${index + 1}`} className="rounded-image" />
            </div>
          ))}
        </Slider>

        <div className="decorations">
          <span role="img" aria-label="balloon">🎈</span>
          <span role="img" aria-label="gift">🎁</span>
          <span role="img" aria-label="confetti">🎊</span>
        </div>
        <Link to="/contact" className="wish-btn animate__animated animate__bounceIn">Click me 🎁</Link>
      </div>
    </div>
  );
};

export default BirthdayPage;
