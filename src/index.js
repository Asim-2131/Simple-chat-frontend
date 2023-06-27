import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const main_container = ReactDOM.createRoot(document.getElementById('m-container'));
main_container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
