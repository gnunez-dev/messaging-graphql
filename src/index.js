import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createClient, Provider} from 'urql';
import {CLIENT_URL} from './utils/auth';

const client = createClient({url: CLIENT_URL});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);

