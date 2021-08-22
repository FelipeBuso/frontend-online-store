import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import '../css/Section.css';
import ShoppingProvider from '../context/ShoppingProvider';

function Routes() {
  return (
    <Switch>
      <ShoppingProvider>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/product/:id" component={ ProductDetails } />
        <Route path="/checkout/" component={ Checkout } />
      </ShoppingProvider>
    </Switch>
  );
}

export default Routes;
