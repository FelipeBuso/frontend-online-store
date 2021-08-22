import React from 'react';
import '../css/ProductsList.css';

function ProductCard({ product }) {
  return (
    <div key={ product.id } className="product-card"> 
      <img src={ product.thumbnail } className="product-card-image" />
      <p>{ product.title }</p>
      <p>R$: { product.price }</p>
    </div>
  )
}

export default ProductCard;
