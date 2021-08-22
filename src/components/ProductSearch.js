import React, { useContext } from 'react';
import ShoppingContext from '../context/ShoppingContext';
import ProductCard from './ProductCard';

function ProductSearch() {
  const { request, dataApi } = useContext(ShoppingContext);

  return (
    <div>
      {dataApi.length === 0 ? (
        <div className="notfon">
          <h4>Nenhum produto foi encontrado</h4>
        </div>
      ) : (
        <ul className="cart-items">
          {dataApi.map((product) => (
            <ProductCard key={ product.id } product={ product } request={ request } />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductSearch;
