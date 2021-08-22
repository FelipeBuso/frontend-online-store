import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import '../css/Products.css';
import Header from './Header';
import ShoppingContext from '../context/ShoppingContext';

export default function ProductDetails() {
  const { addToCart, dataApi, getTotalItens } = useContext(ShoppingContext);
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getTotalItens();
  }, [getTotalItens]);

  useEffect(() => {
    const getProducts = () => {
      if (id) {
        const data = dataApi.filter((item) => item.id === id);
        setProduct(data);
      }
    };
    getProducts();
  }, [dataApi, id]);

  function renderRating() {
    setShowForm(true);
  }

  return (
    <>
      <Header />
      <div>
        {product.map((prod, ind) => (
          <div key={ ind }>
            <div className="name-item-detais">
              <h3 data-testid="product-detail-name">{prod.title}</h3>
              <p>{ `R$ ${prod.price.toLocaleString('pt-BR')}` }</p>
            </div>
            <div className="product-detail">
              <img src={ prod.thumbnail } alt={ prod.title } className="img-details" />
              <ul>
                {prod.attributes && prod.attributes
                  .map((item, index) => (
                    <li key={ index }>
                      {item.name}
                      :
                      {' '}
                      {item.value_name}
                    </li>
                  ))}
              </ul>
            </div>
            <button
              type="button"
              className="button"
              data-testid="product-detail-add-to-cart"
              disabled={ prod.counter > prod.availableQuantity }
              onClick={ () => addToCart(prod) }

            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
      <form className="form">
        <input
          name="email"
          required
          placeholder="Email"
          type="text"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }

        />
        <textarea
          name="message"
          placeholder="Message"
          data-testid="product-detail-evaluation"
          cols="30"
          rows="10"
          value={ message }
          onChange={ ({ target: { value } }) => setMessage(value) }

        />
        <label htmlFor="rating">
          1
          <input
            type="radio"
            id="1"
            name="rating"
            value="1"
            onChange={ ({ target: { value } }) => setRating(value) }

          />
        </label>
        <label htmlFor="rating">
          2
          <input
            type="radio"
            id="2"
            name="rating"
            value="2"
            onChange={ ({ target: { value } }) => setRating(value) }

          />
        </label>
        <label htmlFor="rating">
          3
          <input
            type="radio"
            id="3"
            name="rating"
            value="3"
            onChange={ ({ target: { value } }) => setRating(value) }

          />
        </label>
        <label htmlFor="rating">
          4
          <input
            type="radio"
            id="4"
            name="rating"
            value="4"
            onChange={ ({ target: { value } }) => setRating(value) }

          />
        </label>
        <label htmlFor="rating">
          5
          <input
            type="radio"
            id="5"
            name="rating"
            value="5"
            onChange={ ({ target: { value } }) => setRating(value) }
          />
        </label>
        <button onClick={ renderRating } type="button">Avaliar</button>
      </form>
      { showForm ? <Rating email={ email } msg={ message } rating={ rating } /> : null}
    </>
  );
}
