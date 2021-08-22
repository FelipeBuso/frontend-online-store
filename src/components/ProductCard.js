import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Products.css';
import ShoppingContext from '../context/ShoppingContext';

export default function ProductCard(props) {
  const { addToCart, counter } = useContext(ShoppingContext);

  const { product } = props;

  return (
    <li data-testid="product" className="card">
      <Link
        className="linktroll"
        data-testid="product-detail-link"
        to={ {
          pathname: `/product/${product.id}`,
        } }
      >
        <div className="forimg">
          <img src={ product.thumbnail } alt={ `Foto do produto ${product.title}` } />
        </div>
        <div className="forname">
          <div>
            <h3>{ product.title }</h3>
          </div>
          <div className="forinfo">
            <p>{ `R$ ${product.price.toLocaleString('pt-BR')}` }</p>
            {product.shipping.free_shipping ? (
              <p className="shipping" data-testid="free-shipping">Frete Grátis!</p>
            ) : null}
          </div>
        </div>
      </Link>
      <button
        disabled={ counter > product.available_quantity }
        className="button"
        data-testid="product-add-to-cart"
        onClick={ () => addToCart(product) }
        type="button"
      >
        Adicionar ao Carrinho
      </button>
    </li>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
}.isRequired;
