import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../img/bars-solid.svg';
import Close from '../img/times-solid.svg';
import CartIcon from '../img/shopping-cart-solid.svg';
import '../css/Header.css';
import ShoppingContext from '../context/ShoppingContext';
import Search from '../img/search-solid.svg';

function Header() {
  const { setQuery, fetchProducts, query,
    getTotalItens, totalitens } = useContext(ShoppingContext);

  useEffect(() => {
    getTotalItens();
  }, [getTotalItens]);

  // const menuToggle = () => {
  //   const { toggle } = state;
  //   setState({ toggle: !toggle });
  // };

  // const sumCartItems = () => {
  //   const storage = { ...localStorage };
  //   const response = Object.values(storage).map((e) => JSON.parse(e));
  //   const total = response.reduce((acc, curr) => acc + curr.counter, 0);
  //   setState({ sum: total });
  // };

  // Aria-hidden:
  // https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content?hl=pt-br
  // const { toggle, sum } = state;
  return (
    <header>
      <div
        className="menu"
      >
        <img src={ Menu } alt="" width="20" />
      </div>
      <div className="logo">
        <h1><Link to="/">Mercado Livre</Link></h1>
      </div>
      <div>
        <div className="digite">
          <p className="info" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="divsearch">
          <section className="searchbar">
            <input
              className="search-txt"
              placeholder="Search"
              data-testid="query-input"
              type="text"
              value={ query }
              onChange={ ({ target: { value } }) => setQuery(value) }
            />
          </section>
          <button
            className="searchbar-btn"
            data-testid="query-button"
            type="button"
            onClick={ () => fetchProducts() }
          >
            <img src={ Search } alt="" width="20" />
          </button>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/product">Produtos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/login">Login / Registro</Link></li>
          <li
            className="close"
            // onClick={ menuToggle }
            aria-hidden="true"
          >
            <img src={ Close } alt="" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span data-testid="shopping-cart-size">{totalitens}</span>
          <Link data-testid="shopping-cart-button" to="/cart">
            <img src={ CartIcon } alt="" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
