import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../actions';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';
import ProductDetail from '../components/ProductDetail';
import '../css/Home.css';

function Home({ getCategories }) {
  const [categoryId, setCategoryId] = useState('');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [productDetailId, setProductDetailId] = useState('');

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
      const json = await response.json();
      setProducts(json.results);
    };
    if (categoryId !== '' || query !== '') getProducts();
  }, [categoryId, query]);

  return (
    <div>
      <Header
        setQuery={ setQuery }
        setCategoryId={ setCategoryId }
        setProductDetailId={ setProductDetailId }
      />
      <section className="home-products-container">
        <CategoriesList
          setCategoryId={ setCategoryId }
          setQuery={ setQuery }
          setProductDetailId={ setProductDetailId }
        />
        {products
          && 
          <ProductsList
            products={ products }
            setProductDetailId={ setProductDetailId }
            setProducts={ setProducts }
            setCategoryId={ setCategoryId }
          />
        }
        { productDetailId &&
          <ProductDetail
            productDetailId={ productDetailId }
          /> }
      </section>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => { dispatch(cartActions.getCategories()); },
});

export default connect(null, mapDispatchToProps)(Home);
