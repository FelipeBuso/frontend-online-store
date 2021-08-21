import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CompletedPurchase from './pages/CompletedPurchase';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/cart" component={ Cart } />
      <Route path="/comprafinalizada" component={ CompletedPurchase } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
