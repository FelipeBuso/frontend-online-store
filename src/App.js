import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

import * as api from './services/api';

function App() {
  // api.getCategories().then(categories => { console.log(categories) })
  // api.getProductsFromCategoryAndQuery('MLB5672', 'Farol').then(categories => { console.log(categories) })
  return (
    <div>
      <div />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <Home { ...api } /> } />
          <Route path="/cart" render={ () => <Cart { ...api } /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
