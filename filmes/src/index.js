import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CadastroFilme from './pages/cadastroFilme/CadastroFilme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CadastroFilme/>
  </React.StrictMode>
);

