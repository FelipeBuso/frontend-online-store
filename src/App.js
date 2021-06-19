import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
// import ShoppingCartButton from './Pages/ShoppingCartButton';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Switch> */}
          <Route exact path="/">
            <Home />
            {/* <Link data-testid="shopping-cart-button" to="/cart">
              <ShoppingCartButton />
            </Link> */}
          </Route>
          <Route path="/cart" render={ (props) => <ShoppingCart { ...props } /> } />
            {/* <Link to="/">Voltar à Home</Link>
          </Route> */}
          <Route
            path="/details/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          {/* </Switch> */}
        </Router>
      </div>);
  }
}

export default App;
