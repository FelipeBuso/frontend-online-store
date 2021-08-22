import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../actions';
import Header from '../components/Header';
import '../css/Cart.css';

function Cart({ cartProducts, addProduct, decreaseQuantProduct, removeProduct }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newTotalPrice = 0;
    cartProducts.forEach((product) => {
      const productTotalPrice = product.price * product.quant_product;
      newTotalPrice += productTotalPrice;
    });
    setTotalPrice(Math.round(newTotalPrice * 100) / 100);
  }, [cartProducts]); 

  function renderProductsCart() {
    const cart = cartProducts.map((product) => {
      return (
        <div
          key={ product.id }
          className="product-cart-card-container"
        > 
          <img src={ product.thumbnail } className="product-cart-image"/>
          <div className="product-cart-content-text">
            <p className="product-cart-title">{ product.title }</p>
            <p className="product-cart-price">R$ { product.price }</p>
            <p className="product-cart-quant">Quantidade: { product.quant_product }</p>
            <button type="button" onClick={ () => addProduct(product) }>+</button> 
            <button type="button" onClick={ () => decreaseQuantProduct(product) }>-</button> <br />
            <button type="button" onClick={ () => removeProduct(product.id) }>Remover do Carrinho</button>
          </div>
        </div>
      );
    });
    return(
      <div className="product-cart-container">
        { cart }
      </div>
    ) 
  }

  return (
    <div>
      <Header />
      <h3 className="product-cart-total-value">Valor Total: R$ { totalPrice }</h3>
      { cartProducts && renderProductsCart() }      
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => { dispatch(cartActions.addProduct(product)); },
  removeProduct: (id) => { dispatch(cartActions.removeProduct(id)); },
  decreaseQuantProduct: (product) => { dispatch(cartActions.decreaseQuantProduct(product)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
