import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';  // Add .js extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);