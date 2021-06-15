import React from 'react';

export default class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;

    console.log(product);
    return (
      <li>
        <h1>{ title} </h1>
        <picture>
          <img src={ thumbnail } alt={ title } />
        </picture>
        <h2>{ price }</h2>
      </li>
    );
  }
}
