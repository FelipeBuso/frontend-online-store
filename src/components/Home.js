import React from 'react';

import CategoryList from './CategoryList';
import ProductSearch from './ProductSearch';
import '../css/Section.css';
import Header from './Header';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="divid">
          <CategoryList />
          <div>
            <ProductSearch />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
