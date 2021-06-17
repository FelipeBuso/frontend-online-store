import React from 'react';
import PropTypes from 'prop-types';
import CardCreator from './cardCreator';

export default class CardList extends React.Component {
  render() {
    const { list, getProductDetails } = this.props;
    return (
      <div>
        {
          list === undefined
            ? <span>Nenhum produto foi encontrado</span>
            : list.map((produto, index) => (
              <CardCreator
                key={ index }
                product={ produto }
                getProductDetails={ getProductDetails }
              />))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
  getProductDetails: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  list: [],
};
