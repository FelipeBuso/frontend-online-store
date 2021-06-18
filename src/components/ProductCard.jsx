import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id, addToCart } = this.props;
    return (
      <li className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/productdetail',
            state: ({
              title,
              price,
              thumbnail,
              id,
            }),
          } }
        >
          <h4>{title}</h4>
          <img alt="foto do produto" src={ thumbnail } />
          <p>{ `R$ ${price}` }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addToCart }
          value={ JSON.stringify({ title, price, thumbnail, quantity: 1 }) }
        >
          Adicionar
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;

export default ProductCard;
