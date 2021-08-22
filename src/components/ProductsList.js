import React from 'react';
import '../css/ProductsList.css';
import ProductCard from './ProductCard';

function ProductsList({ products, setProductDetailId }) {
  return (
    <div className="product-list-container">
      { products.map((product) => {
        return (
          <ProductCard
            key={ product.id }
            product={ product }
            setProductDetailId={ setProductDetailId }
          />
        );
      }) }
    </div>
  )
}

export default ProductsList;
