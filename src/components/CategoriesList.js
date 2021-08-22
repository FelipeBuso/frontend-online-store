import React from 'react';
import { connect } from 'react-redux';
import '../css/CategoriesList.css';

function CategoriesList({ categories, setCategoryId, setQuery, setProductDetail }) {

  function setParamsAPI(id) {
    setProductDetail({});
    setCategoryId(id);
    setQuery('');
  }

  return (
    <div className="categories-list-container">
      { categories.map((category) => {
        return(
          <button
            className="categories-list-button"
            key={ category.id }
            onClick={ () => setParamsAPI(category.id) }
          >
            { category.name }
          </button>
        );
      }) 
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  categories: state.cart.categories,
});

export default connect(mapStateToProps)(CategoriesList);
