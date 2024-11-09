import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
        <div className='header-nav'>
      <nav>
        <Link  to="/" >Home</Link>
        <Link to="/birthday">Birthday Wish</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
