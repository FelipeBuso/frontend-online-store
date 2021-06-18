import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  getProductFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  renderLocalStorageItems() {
    const oldCart = this.getProductFromLocalStorage();
    if (!oldCart) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return oldCart.map((product) => (
      <CartItem key={ product.id } product={ product } />
    ));
  }

  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        { this.renderLocalStorageItems() }
        <p>Soma Total</p>
        <Link to="/">Voltar Para Pagina Inicial</Link>
      </div>
    );
  }
}

export default Cart;
