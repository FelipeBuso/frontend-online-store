import React from 'react';
import { connect } from 'react-redux';
import '../css/CategoriesList.css';

function CategoriesList({ categories, setCategorieId }) {
  return (
    <div className="categories-list-container">
      { categories.map((categorie) => {
        return(
          <button
            className="categories-list-button"
            key={ categorie.id }
            onClick={ () => setCategorieId(categorie.id) }
          >
            { categorie.name }
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
