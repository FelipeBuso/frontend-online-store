import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ShoppingContext from '../context/ShoppingContext';

const fullnameRegexp = new RegExp('[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3}');
const cpfRegexp = new RegExp('^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$');
const emailRegexp = new RegExp('\\S+@\\S+\\.\\S+');
const phoneRegexp = new RegExp('\\d{2}\\s\\d{4,5}\\-\\d{4}$');
const cepRegexp = new RegExp('[0-9]{5}-[0-9]{3}$');
const addressRegxp = new RegExp('[a-zA-Z0-9 ,.]{10}');

export default function Checkout() {
  const { cart, total } = useContext(ShoppingContext);

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [method, setMethod] = useState('');
  const [fulled, setFulled] = useState(false);

  function handleCheck() {
    if (fullnameRegexp.test(fullname) && cpfRegexp.test(cpf) && emailRegexp.test(email)
    && phoneRegexp.test(phone) && cepRegexp.test(cep) && addressRegxp.test(address)
    && method !== '') {
      setFulled(true);
    } else {
      setFulled(false);
    }
  }

  // function handle({ target }) {
  //   this.setState({ [target.name]: target.value });
  // }

  if (fulled) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Dados de compra</h1>
      <form>
        <fieldset>
          <legend><h2>Revise seus produtos</h2></legend>
          <ul>
            {cart.map((item) => (
              <li key={ item.id }>
                <h3>{item.title}</h3>
                <p>
                  { `Valor unitário: R$ ${item.price.toLocaleString('pt-BR')}` }
                </p>
                <p>
                  Qtd.:
                  {item.counter}
                </p>

                <p>
                  {
                    `Valor por item: R$ 
                    ${(item.price * item.counter).toLocaleString('pt-BR')}`
                  }
                </p>
              </li>
            ))}
          </ul>
          <p>{ `TOTAL: R$ ${total.toLocaleString('pt-BR')}` }</p>
        </fieldset>
        <fieldset>
          <legend><h2>Informações do comprador</h2></legend>
          <input
            name="fullname"
            value={ fullname }
            data-testid="checkout-fullname"
            type="text"
            maxLength="50"
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}"
            title="Mínimo de três caracteres"
            placeholder="fullname"
            onChange={ ({ target: { value } }) => setFullname(value) }
          />
          <input
            name="email"
            value={ email }
            data-testid="checkout-email"
            type="text"
            pattern="\S+@\S+\.\S+"
            title="Formato: alguém@algo.algo"
            placeholder="E-mail"
            maxLength="50"
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
          <input
            name="cpf"
            value={ cpf }
            data-testid="checkout-cpf"
            type="text"
            pattern="^([0-9]){3}.([0-9]){3}.([0-9]){3}-([0-9]){2}$"
            title="Formato: 000.000.000-00"
            placeholder="CPF"
            maxLength="14"
            onChange={ ({ target: { value } }) => setCpf(value) }
          />
          <input
            name="phone"
            value={ phone }
            data-testid="checkout-phone"
            type="text"
            pattern="(\d{2})\s(\d{4,5})-(\d{4})"
            title="00 0000-0000 ou 00 00000-0000"
            placeholder="Phone Number"
            maxLength="14"
            onChange={ ({ target: { value } }) => setPhone(value) }
          />
          <input
            name="cep"
            value={ cep }
            data-testid="checkout-cep"
            type="text"
            pattern="[0-9]{5}-[0-9]{3}$"
            title="Formato: 00000-000"
            minLength="9"
            maxLength="9"
            placeholder="CEP"
            onChange={ ({ target: { value } }) => setCep(value) }
          />
          <input
            name="address"
            value={ address }
            data-testid="checkout-address"
            type="text"
            pattern="[a-zA-Z0-9 '-/(/)]{10,}"
            title="Mínimo de 10 caracteres"
            maxLength="50"
            placeholder="Address"
            onChange={ ({ target: { value } }) => setAddress(value) }
          />
        </fieldset>
        <fieldset>
          <legend><h2>Método de pagamento</h2></legend>
          <label htmlFor="method">
            <input
              name="method"
              type="radio"
              value="credito"
              onChange={ ({ target: { value } }) => setMethod(value) }
              checked
            />
            Cartão de Crédito
            <input
              name="method"
              type="radio"
              value="boleto"
              onChange={ ({ target: { value } }) => setMethod(value) }
            />
            Boleto
            <input
              name="method"
              type="radio"
              value="debito"
              onChange={ ({ target: { value } }) => setMethod(value) }
            />
            Débito
          </label>
        </fieldset>
        <button
          type="button"
          onClick={ handleCheck }
        >
          {' '}
          FINALIZAR COMPRA
        </button>
      </form>
    </div>
  );
}
