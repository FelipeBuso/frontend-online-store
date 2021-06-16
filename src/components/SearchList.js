import React, { Component } from 'react';
import * as api from '../services/api';
import PropTypes from 'prop-types';

export default class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: '',
    };
    this.showList = this.showList.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;
    this.getQuery(product);
  }

  getQuery = async (product) => {
    const getList = await api.getProductsFromCategoryAndQuery('MLB1071', product);
    return this.setState({ products: getList.results });
  };

  showList = () => {
    return this.state.products.map((el) => {
      const { thumbnail, title, id, price } = el;
      return (
        <div className="content" data-testid="product" key={id}>
          <img src={thumbnail} />
          <h3>{title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <h6>R${parseFloat(price, 10).toFixed(2)}</h6>
          <ul>
            <li>
              <i class="fa fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-star" aria-hidden="true"></i>
            </li>
            <li>
              <i class="fa fa-star" aria-hidden="true"></i>
            </li>
          </ul>
          <button className="buy-1">Adicionar ao Carrinho</button>
        </div>
      );
    });
  };

  render() {
    if (!this.state.products) {
      return <div>Loading...</div>;
    } else {
      return <div className="search-list">{this.showList()}</div>;
    }
  }
}
