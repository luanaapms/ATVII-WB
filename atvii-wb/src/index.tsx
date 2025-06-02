import React from 'react';
import ReactDOM from 'react-dom/client';
import Roteador from './componentes/roteador';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Roteador />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
