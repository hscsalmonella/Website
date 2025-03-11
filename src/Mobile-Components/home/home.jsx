import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS file for styling
import Groepsfoto from '../../assets/img/vlag4.jpg';
import Groepsfoto2 from '../../assets/img/banner/slide_1.png';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={isMobile ? 'mobile-home' : 'desktop-home'}>
      <div className='gradient'></div>
      <div className="header-image">
        {isMobile ? (
          <img src={Groepsfoto2} alt="Club Image" />
        ) : (
          <img className="foto2" src={Groepsfoto2} alt="Club Image" />
        )}
        <h1 className="big-words">HSC Salmonella</h1>
        <p className="small-words">een club van kameraden</p>
      </div>
    </div>
  );
};

export default Home;
