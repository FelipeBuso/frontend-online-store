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
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
      const json = await response.json();
      console.log(json.results);
      setProducts(json.results);
    };
    if (categoryId !== '' || query !== '') getProducts();
  }, [categoryId, query]);

  useEffect(() => {
    const getProductDetail = async () => {
      const response = await fetch(`https://api.mercadolibre.com/items?ids=${productDetailId}`);
      const json = await response.json();
      // const { body: { title, price, thumbnail } } = json[0];
      const newProductDetail = json[0].body;
      setProducts([]);
      setProductDetail(newProductDetail);
    }
    if (productDetailId !== '') getProductDetail();
  }, [productDetailId]);

  return (
    <div>
      <Header
        setQuery={ setQuery }
        setCategoryId={ setCategoryId }
        setProductDetail={ setProductDetail }
      />
      <section className="home-products-container">
        <CategoriesList
          setCategoryId={ setCategoryId }
          setQuery={ setQuery }
          setProductDetail={ setProductDetail }
        />
        {products
          && 
          <ProductsList
            products={ products }
            setProductDetailId={ setProductDetailId }
            setProductDetail={ setProductDetail }
          />
        }
        {productDetail && <ProductDetail productDetail={ productDetail } />}
      </section>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => { dispatch(cartActions.getCategories()); },
});

export default connect(null, mapDispatchToProps)(Home);
