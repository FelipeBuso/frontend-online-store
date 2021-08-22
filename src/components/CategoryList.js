import React, { useContext } from 'react';

import '../css/Section.css';
import ShoppingContext from '../context/ShoppingContext';

export default function CategoryList() {
  const { fetchProducts, categories, CategoryId, loading } = useContext(ShoppingContext);

  return (
    <section className="category-section">
      <h1>Categorias:</h1>
      { categories.map((category) => (
        <option
          type="button"
          key={ category.id }
          className="label-radio"
          data-testid="category"
          disabled={ loading }
          id={ CategoryId }
          name="category"
          value={ category.id }
          onClick={ ({ target: { value } }) => fetchProducts(value) }

        >
          { category.name }

        </option>
      ))}

    </section>
  );
}
