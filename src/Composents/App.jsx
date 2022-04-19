import React,{ useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Header from './Header';
import SideNav from './SideNav';
import Error404 from './404';
import Footer from './Footer';

// pages
import HomePage from '../Pages/HomePage';
import ListSoldiers from '../Pages/ListSoldiers';
import SearchByCurrentDate from '../Pages/SearchByDate';
import UpdateSoldier from '../Pages/UpdateSoldier';
import Add from '../Pages/AddSolider';
import SearchSoldier from '../Pages/SearchSoldier';
import Loging from '../Pages/Loging';

function App(){
   
    // const [UserIsConnected, setUserIsConnected] = useState([false]);
    // console.log(UserIsConnected)

    // useEffect(() => {
    //     fetch(`http://localhost/API/api-memorial/config/connected.php`)
    //     .then((response) => response.json()
    //     .then((data) =>{
    //         if(data === "user is connected"){
    //             setUserIsConnected(true)
    //           }
    //     })
    //     .catch((error) =>{ 
    //         console.log(error.message);
    //         alert("Echec de la methode connection!"+error.message)
 
    //       })
    //     )
    
    //     })
    

            return(
       
                <BrowserRouter>
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
              </BrowserRouter>
              )

    
}
export default App;