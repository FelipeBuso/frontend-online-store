import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

function Cart({ cartProducts }) {

  // function renderProductsCart() {
  //   const cart = cartProducts.map((product) => {

  //   });
  //   return cart;
  // }

  return (
    <div>
      <Header />
      {/* { cartProducts && renderProductsCart() }       */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
});

export default connect(mapStateToProps)(Cart);
