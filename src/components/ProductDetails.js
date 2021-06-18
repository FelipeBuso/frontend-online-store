import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import cart from '../Images/cart.png';
import Rating from './Rating';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      count: 1,
    };
    this.getProduct = this.getProduct.bind(this);
    this.addItemCart = this.addItemCart.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  addItemCart() {
    const { createCart, location } = this.props;
    const { count } = this.state;
    const { productToAdd } = location.state;
    console.log(productToAdd);
    productToAdd.cartItem = true;
    productToAdd.cartCount = count;
    createCart(productToAdd);
    this.setState((previous) => ({
      count: previous.count + 1,
    }));
  }

  async getProduct() {
    const { match } = this.props;
    const { id } = match.params;
    const request = await getProductsFromCategoryAndQuery('$CATEGORY_ID', `${id}`);
    const product = await request.results.filter((result) => (
      result.title === id
    ));
    await this.setState({
      product: product[0],
    });
    return product[0];
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { product } = this.state;
    return (
      <div>
        <img src={ product.thumbnail } alt="product" />
        <p data-testid="product-detail-name">{product.title}</p>
        <p>
          {'R$ '}
          { product.price }
        </p>
        { product.attributes && product.attributes.map((att, index) => (
          <p key={ index }>
            { att.name }
            -
            { att.value_name }
          </p>
        ))}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addItemCart }
        >
          Adicionar ao carrinho
        </button>
        <Rating id={ id } />
        <Link to="/carrinho-compras">
          <img
            src={ cart }
            alt="carrinho-compras"
            data-testid="shopping-cart-button"
            height="200px"
          />
        </Link>
        <Link to="/">
          HOME
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(String).isRequired,
};

export default ProductDetails;
