import React, { Component } from 'react';
import Avaliations from '../Avaliations/Avaliations';

class AvaliationForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      rating: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addAvaliation(avaliation) {
    if (!localStorage.avaliations) {
      localStorage.setItem('avaliations', JSON.stringify([avaliation]));
    } else {
      const avaliations = JSON.parse(localStorage.getItem('avaliations'));
      localStorage.setItem('avaliations', JSON.stringify([...avaliations, avaliation]));
    }
    this.setState({
      email: '',
      rating: '',
      message: '',
    });
  }

  submitButton() {
    const { email, rating, message } = this.state;
    const avaliation = {
      email,
      rating,
      message,
    };
    return this.addAvaliation(avaliation);
  }

  render() {
    const { email, rating, message } = this.state;
    let avaliations = [];
    if (localStorage.avaliations) {
      avaliations = JSON.parse(localStorage.getItem('avaliations'));
    }
    return (
      <>
        <form>
          <h3>Avaliações</h3>
          <label htmlFor="email-id">
            Email:
            <input
              id="email-id"
              type="e-mail"
              placeholder="Digite seu e-mail"
              required
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rating-id">
            Estrelas:
            <input
              id="rating-id"
              type="number"
              step={ 0.1 }
              min={ 0 }
              max={ 5 }
              placeholder="0 a 5"
              required
              value={ rating }
              name="rating"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="mensage-id">
            Mensagem:
            <textarea
              type="text"
              data-testid="product-detail-evaluation"
              id="mensage-id"
              value={ message }
              name="message"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <button
            onClick={ this.submitButton }
            id="avaiation-button"
            type="button"
          >
            Avaliar
          </button>
        </form>
        <section>
          <h4>Avaliações recentes</h4>
          {(avaliations.length > 0)
            ? avaliations.map((avaliation, index) => {
              index += 1;
              index -= 1;
              return (<Avaliations avaliation={ avaliation } key={ index } />);
            })
            : <p>Produto ainda sem avaliações</p>}
        </section>
      </>
    );
  }
}

export default AvaliationForm;
