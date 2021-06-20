import React from 'react';
import PropTypes from 'prop-types';
import NewItem from '../components/NewItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppingCart: [],
      // count: 0,
      // products: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.filterFunction();
  }

  // Função responsável por deletar um item do carrinho de comprar. By: Amandha B.
  handleDelete(product) {
    const { shoppingCart } = this.state;
    const newList = shoppingCart.filter((item) => item.id !== product.id);
    this.setState({
      shoppingCart: newList,
    });
  }

  filterFunction() {
    const { cart } = this.props;
    const result = cart.reduce((acc, curr) => (acc
      .includes(curr) ? acc : acc.concat(curr)), []);
    this.setState({
      shoppingCart: result,
    });
  }

  render() {
    const { cart, increaseQuantity, decreaseQuantity } = this.props;
    const { shoppingCart /* , count, products */ } = this.state;

    const emptyCart = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>);

    return !cart.length ? emptyCart : shoppingCart.map((product, index) => (
      <NewItem
        product={ product }
        // cart={ cart }
        key={ index }
        handleDelete={ this.handleDelete }
        increaseQuantity={ increaseQuantity }
        decreaseQuantity={ decreaseQuantity }
      />
    ));
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
    reduce: PropTypes.func.isRequired,
  }).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
