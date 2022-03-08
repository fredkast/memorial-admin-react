import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// components
import Header from './Composents/Header';
import Error404 from './Composents/404';
// pages
import HomePage from './Pages/HomePage/index';
import ListSoldiers from './Pages/ListSoldiers';
import SearchByCurrentDate from './Pages/SearchByDate';
import UpdateSoldier from './Pages/UpdateSoldier';
import Footer from './Composents/Footer';
import Add from './Pages/AddSolider/index';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header/>
   
      <Routes>
   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ListeSoldats" element={<ListSoldiers/>}/>
        <Route path="/update" element={<UpdateSoldier/>}/>
        <Route path="/SearchByCurrentDate" element={<SearchByCurrentDate/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path='*' element={<Error404 />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
