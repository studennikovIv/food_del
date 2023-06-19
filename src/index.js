import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { RootStoreProvider } from 'store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootStoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootStoreProvider>
  </React.StrictMode>
);
