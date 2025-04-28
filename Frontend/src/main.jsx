// EmpowerHer/my-project/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import { DataProvider } from './components/DataProvider/DataProvider'; // Assuming DataProvider is in this path
import {initialState, reducer} from './pages/Utility/reducer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </BrowserRouter>
);