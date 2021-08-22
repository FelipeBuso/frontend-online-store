import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ShoppingContext from './ShoppingContext';
import { getCategories } from '../services/api';
import * as api from '../services/api';

function ShoppingProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState('');
  const [setCategoryId] = useState('');
  const [request, setRequest] = useState(false);
  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalitens, setTotalitens] = useState(0);

  useEffect(() => {
    async function fetchApi() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchApi();
  }, [setCategories]);

  const fetchProducts = async (categoryId) => {
    setLoading(true);
    setRequest(true);
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, query);
    setDataApi(results);
    setRequest(false);
    setQuery('');
    setLoading(false);
  };

  const addToCart = (product) => {
    setCounter((prev) => (prev + 1));
    const check = cart.find((item) => item.id === product.id);
    if (check) {
      setCart(cart.map(
        (x) => (x.id === product.id ? { ...check, counter: check.counter + 1 } : x),
      ));
    } else {
      setCart([...cart, { ...product, counter: 1 }]);
    }
  };

  const getTotal = () => {
    const res = cart.reduce((prev, item) => prev + (item.price * item.counter), 0);
    setTotal(res);
  };

  const getTotalItens = () => {
    const res = cart.reduce((prev, item) => prev + item.counter, 0);
    setTotalitens(res);
  };

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        if (item.counter === 1) {
          item.counter = 1;
        } else {
          item.counter -= 1;
        }
      }
      setCart([...cart]);
      getTotal();
    });
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.counter += 1;
      }
      setCart([...cart]);
      getTotal();
    });
  };

  const remove = ((id) => {
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });

    setCart([...cart]);
    getTotal();
  });

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(cart));
    localStorage.setItem('dataTotal', JSON.stringify(total));
  }, [cart, total]);

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      setCart([...dataCart]);
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      setTotal([dataTotal]);
    }
  }, []);

  const contextValue = {
    categories,
    setCategories,
    query,
    setQuery,
    setCategoryId,
    request,
    setRequest,
    dataApi,
    setDataApi,
    fetchProducts,
    loading,
    setLoading,
    cart,
    setCart,
    addToCart,
    counter,
    reduction,
    increase,
    remove,
    total,
    getTotal,
    totalitens,
    getTotalItens,
  };

  return (
    <ShoppingContext.Provider value={ contextValue }>
      {children}
    </ShoppingContext.Provider>
  );
}

ShoppingProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default ShoppingProvider;
