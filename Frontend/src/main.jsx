import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import { DataProvider } from './components/DataProvider/DataProvider';
import { reducer } from './pages/Utility/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider reducer={reducer}>
      <App />
    </DataProvider>
  </BrowserRouter>
);
