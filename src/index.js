import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import Product from './Components/Product/Product';
import ProductFilter from './Components/ProductFilter/ProductFilter';
import Products from './Components/Products/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
      <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
  
);


