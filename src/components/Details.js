import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import * as api from '../services/api';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.location.state,
    };

    this.buildTechSpecifications = this.buildTechSpecifications.bind(this);
  }

  buildTechSpecifications() {
    const { item: { product } } = this.state;
    return product.attributes.map((attribute) => (
      <ul key={ attribute.id }>
        <li>
          {`${attribute.name}: ${attribute.value_name}`}
        </li>
      </ul>
    ));
  }

  render() {
    const { item: { product: { title } } } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <h1 data-testid="product-detail-name">{title}</h1>
        {this.buildTechSpecifications()}
        <button type="button">Adicionar ao carrinho</button>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};
