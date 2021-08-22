import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingContext from '../context/ShoppingContext';
import '../css/Products.css';
import Header from './Header';

function ShoppingCart() {
  const { cart, reduction, increase,
    remove, total, getTotal } = useContext(ShoppingContext);

  useEffect(() => {
    getTotal();
  }, [getTotal]);

  if (!cart.length) {
    return (
      <div>
        <Header />
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="div-cart">
        <h1>Carrinho</h1>
        <p>{ `TOTAL: R$ ${total.toLocaleString('pt-BR')}` }</p>
        <Link to={ { pathname: '/checkout' } }>
          <button className="button" data-testid="checkout-products" type="button">
            Finalizar compra
          </button>
        </Link>
      </div>
      <ul className="cart-items">
        {cart.map((product) => (
          <li className="card" key={ product.id }>
            <button
              className="button-delete"
              type="button"
              name="delete"
              id={ product.title }
              onClick={ () => remove(product.id) }
            >
              Excluir
            </button>
            <div className="products">
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/product/${product.id}`,
                } }
              >

                <img
                  src={ product.thumbnail }
                  alt={ `Foto do produto ${product.title}` }
                />
              </Link>
              <h3 data-testid="shopping-cart-product-name">{product.title}</h3>

              <p>{ `R$ ${(product.price * product.counter).toLocaleString('pt-BR')}` }</p>

            </div>
            <div className="buttons-carts">
              <button
                data-testid="product-decrease-quantity"
                type="button"
                className="button-sub-sum"
                onClick={ () => { reduction(product.id); } }
                disabled={ product.counter === 1 }
              >
                -
              </button>
              <p
                className="quantity"
                data-testid="shopping-cart-product-quantity"
              >
                {product.counter}

              </p>
              <button
                data-testid="product-increase-quantity"
                type="button"
                className="button-sub-sum"
                onClick={ () => { increase(product.id); } }
                disabled={ product.available_quantity === product.counter }
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
