import React from 'react';
import ReactDOM from 'react-dom/client';
// import { lazy, Suspense } from 'react';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// console.log(data);
// const LazyApp = lazy(() =>
//   import('./App').then(module => {
//     return {
//       ...module,
//       default: module.default,
//     };
//   })
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
