import React,{ useState, useEffect } from "react";
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// components
// import Header from './Composents/Header';
// import SideNav from './Composents/SideNav';
// import Error404 from './Composents/404';
// pages
// import HomePage from './Pages/HomePage/index';
// import ListSoldiers from './Pages/ListSoldiers';
// import SearchByCurrentDate from './Pages/SearchByDate';
// import UpdateSoldier from './Pages/UpdateSoldier';
// import Footer from './Composents/Footer';
// import Add from './Pages/AddSolider/index';
// import SearchSoldier from './Pages/SearchSoldier';
// import Loging from './Pages/Loging';
import App from "./Composents/App";

// J'ai deplacé tout le contenu dans un composent App.jsx, afin de pouvoir mettre du code JS, une condition qui affiche ou pas les composant en focntion de si l'user est connecter ou pas

  ReactDOM.render(

    <React.StrictMode>
     <App></App>
      {/* <BrowserRouter>
        <Header/>
        <SideNav/>
        <Routes>
          <Route path="/" element={<Loging/>}/>
          <Route path="/dashboard" element={<HomePage/>}/>
          <Route path="/ListeSoldats" element={<ListSoldiers/>}/>
          <Route path="/search" element={<SearchSoldier/>}/>
          <Route path="/update" element={<UpdateSoldier/>}/>
          <Route path="/SearchByCurrentDate" element={<SearchByCurrentDate/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path='*' element={<Error404 />} />
         
        </Routes>
        <Footer/>
      </BrowserRouter> */}
      
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
