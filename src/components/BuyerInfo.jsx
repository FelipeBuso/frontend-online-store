import React, { Component } from 'react';

export default class BuyerInfo extends Component {
  render() {
    return (
      <form>
        <label htmlFor="fullname-input">
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            id="fullname-input"
          />
        </label>
        <br />
        <label htmlFor="checkout-input">
          <input
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
            id="email-input"
          />
        </label>
        <br />
        <label htmlFor="cpf-input">
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            id="cpf-input"
          />
        </label>
        <br />
        <label htmlFor="phone-input">
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
            id="phone-input"
          />
        </label>
        <br />
        <label htmlFor="cep-input">
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
            id="cep-input"
          />
        </label>
        <br />
        <label htmlFor="adress-input">
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
            id="address-input"
          />
        </label>
        <br />
      </form>
    );
  }
}
