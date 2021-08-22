import React from 'react'
import '../css/Header.css';
import HeaderSearchBar from './HeaderSearchBar';
import { Link } from 'react-router-dom';

function Header({ setQuery, setCategoryId, setProductDetail }) {
  return (
    <header className="header-container">
      <HeaderSearchBar
        setQuery={ setQuery }
        setCategoryId={ setCategoryId }
        setProductDetail={ setProductDetail }
      />
      <Link to="/" className="links-header">Home</Link>
      <Link to="/cart" className="links-header">Cart</Link>
    </header>
  )
}

export default Header;
