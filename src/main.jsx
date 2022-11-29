import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
)
