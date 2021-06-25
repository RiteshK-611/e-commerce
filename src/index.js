import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './components/Context_API/StateProvider';
import reducer, { initialState } from './components/Context_API/Reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  , document.getElementById('root')
);