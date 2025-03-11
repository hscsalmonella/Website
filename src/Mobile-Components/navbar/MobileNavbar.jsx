import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/img/schild.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/kalender">Kalender</Link>
        <Link to="/Praesidium">Praesidium</Link>
        <Link to="/Pro-Praesidia">Pro-Praesidium</Link>
        {/*<Link to="/Vacatures">Vacatures</Link>*/}
        <Link to="/Sponsors">Sponsors</Link>
        
      </div>
      <Link to="/" className="logo"> 
        <img src={logo} alt="Logo" />
      </Link>
      <div className={`hamburger ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
