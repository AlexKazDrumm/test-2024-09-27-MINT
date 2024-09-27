import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreContext } from './stores';
import store from './stores';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </StoreContext.Provider>
  </React.StrictMode>
);