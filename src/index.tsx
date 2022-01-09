import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * const { currentKey, onChangeKey } = useKeyboardService();
 *
 * <Key letter="a" isActive={currentKey === "a"} onChange={onChangeKey} />
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
