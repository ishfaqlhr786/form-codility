import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { Form } from './Form';
import {Form1} from './Form1'
import { Form2 } from './Form2';
import { Form3 } from './Form3';
import Upload from './Upload';
import { CodilityFormFlex } from './CodilityFormFlex';

ReactDOM.render(
  <React.StrictMode>
    <CodilityFormFlex
    />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
