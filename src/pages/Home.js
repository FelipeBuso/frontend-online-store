import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../actions';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';
import '../css/Home.css';

function Home({ getCategories }) {
  const [categoryId, setCategorieId] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=`);
      const json = await response.json();
      console.log(json.results);
      setProducts(json.results);
    };
    if (categoryId !== '') getProducts();
  }, [categoryId]);

  return (
    <div>
      <Header />
      <section className="home-products-container">
        <CategoriesList setCategorieId={ setCategorieId } />
        {products && <ProductsList products={ products } />}
      </section>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => { dispatch(cartActions.getCategories()); },
});

export default connect(null, mapDispatchToProps)(Home);
