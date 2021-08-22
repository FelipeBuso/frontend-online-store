import React from 'react'
import { Link } from 'react-router-dom';

function CompletedPurchase() {
  return (
    <div>
      <h1>Estamos em Compra Finalizada</h1> <br />
      <Link to="/">Ir para Home</Link> <br />
      <Link to="/cart">Ir para o Carrinho</Link> <br />      
    </div>
  );
}

export default CompletedPurchase;
