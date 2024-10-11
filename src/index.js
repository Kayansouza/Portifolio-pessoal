import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter

ReactDOM.render(
  <BrowserRouter> {/* Envolva o App com BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
