import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/index';
import ListePerso from './Pages/ListePerso';
import Header from './Composents/Header';
import Exo2 from './Pages/Exo2';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from './Composents/404';
// import './Styles/index'

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header/>
   
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/exo1" element={<ListePerso/>}/>
        <Route path="/exo2" element={<Exo2/>}/>
        <Route path='*' element={<Error404 />} />
        
      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
