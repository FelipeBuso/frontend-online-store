import React from 'react'
import '../css/Header.css';
import HeaderSearchBar from './HeaderSearchBar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
      <HeaderSearchBar />
      <Link to="/" className="links-header">Home</Link>
      <Link to="/cart" className="links-header">Cart</Link>
    </header>
  )
}

export default Header;
