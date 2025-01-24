import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Portfolio Tracker</h1>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/add">Add Stock</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
