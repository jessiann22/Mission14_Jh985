import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/Podcast" className="navbar-link">
          Podcast
        </Link>
        <Link to="/MovieCollection" className="navbar-link">
          Movie Collection
        </Link>
        <Link to="/MovieList" className="navbar-link">
          Movie List
        </Link>

      </nav>
    </div>
  );
}

export default Navbar;
