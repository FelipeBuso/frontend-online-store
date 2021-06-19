import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class Details extends Component {
  // constructor(props) {
  //   super(props);
  //   const { count } = this.props;
  //   this.state = {
  //     count: 1,
  //   };
  // }

  // getCount = () => {
  //   let { count } = this.state;
  //   const { title, price, thumbnail } = this.props;

  //   if (localStorage.getItem(title)) {
  //     const product = JSON.parse(localStorage.getItem(title)).counter;
  //     this.setState({ counter: +product + 1 });
  //     counter = +product + 1;
  //   } else {
  //     this.setState((previous) => ({ counter: previous.counter + 1 }));
  //   }
  // }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { product } = state;
    const { title, price, thumbnail, attributes } = product;

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cartitems">
          Carrinho de compras
        </Link>
        <div>
          <h2 data-testid="product-detail-name">{`${title} - R$${price}`}</h2>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name} - ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Voltar</Link>
        <Button
          title={ product.title }
          thumbnail={ product.thumbnail }
          price={ product.price }
          dataTestid="product-detail-add-to-cart"
        />
        {/* <button
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button> */}
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      product: PropTypes.objectOf({
        title: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        attributes: PropTypes.array,
      }),
    }),
  }).isRequired,
};
