import React from 'react';
import '../css/ProductsList.css';
import ProductCard from './ProductCard';

function ProductsList({ products }) {
  return (
    <div className="product-list-container">
      { products.map((product) => {
        return (
          <ProductCard key={ product.id } product={ product } />
        );
      }) }
    </div>
  )
}

export default ProductsList;
