import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './components/Routes';
import './css/Section.css';

function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
