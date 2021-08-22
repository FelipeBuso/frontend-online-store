import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../css/Header.css';
import HeaderSearchBar from './HeaderSearchBar';
import { Link } from 'react-router-dom';

function Header({ setQuery, setCategoryId, setProductDetailId, cartProducts }) {
  const [quantProductCart, setQuantProductCart] = useState(0);

  useEffect(() => {
    let quantAtCart = 0;
    cartProducts.forEach((product) => quantAtCart += product.quant_product);
    setQuantProductCart(quantAtCart);
  }, [cartProducts]);

  return (
    <header className="header-container">
      <HeaderSearchBar
        setQuery={ setQuery }
        setCategoryId={ setCategoryId }
        setProductDetailId={ setProductDetailId }
      />
      <Link to="/" className="links-header">Home</Link>
      <Link to="/cart" className="links-header">Cart</Link>
      <p>{ quantProductCart }</p>
    </header>
  )
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
});

export default connect(mapStateToProps)(Header);
