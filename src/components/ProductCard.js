import React from 'react';
import '../css/ProductsList.css';

function ProductCard({ product, setProductDetailId }) {
  return (
    <div
      key={ product.id }
      className="product-card-container"
      onClick={ () => setProductDetailId(product.id) }
    > 
      <img src={ product.thumbnail } className="product-card-image" />
      <div className="product-card-content-text">
        <p className="product-card-title">{ product.title }</p>
        <p className="product-card-price">R$: { product.price }</p>
      </div>
    </div>
  )
}

export default ProductCard;
