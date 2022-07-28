import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Question2 from './Components/QUESTION2/Question2';
import Child from './Components/QUESTION4/Child';
import Question3 from '../src/Components/QUESTION3/Question3';
import Question1 from './Components/QUESTION1/Question1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <BrowserRouter>
   
    <App /> 
    </BrowserRouter>
    

  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
