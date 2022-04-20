import React,{ useState, useEffect } from "react";
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
// Styles
import "../Styles/style.css";

// const [themeDark, setThemeDark ] = useState()

// var css_theme_prefers = sessionStorage.getItem('theme');

// if(css_theme_prefers == "light"){
//     setThemeDark("Light")
// }
   


function App(){
   
    const [User, setUser] = useState();

  // EN passant par l'API : erreur

    // const [UserIsConnected, setUserIsConnected] = useState(false);
    //console.log(UserIsConnected)

    // useEffect(() => {
    //     fetch(`https://api.tytnature.fr/config/connected.php`)
    //     .then((response) => response.json()
    //     .then((data) =>{
    //         if(data === "user is connected"){
    //             setUserIsConnected(true)
    //             console.log(UserIsConnected)
    //           }else{
    //             setUserIsConnected(false)
    //             console.log(UserIsConnected)
    //             console.log('user not connected')
    //           }
    //     })
    //     .catch((error) =>{ 
    //         console.log(error.message);
    //         setUserIsConnected(false)
    //         console.log(UserIsConnected)
    //         alert("Echec de la methode connection! "+error.message)
 
    //       })
    //     )

    // })
    // console.log(UserIsConnected)

    // en passant par les cookies

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = loggedInUser;
          setUser(foundUser);
          console.log(User)
        }
      }, []);
    

    if(User){
        return(
            <BrowserRouter>
                <Header/>
                <SideNav/>
                <Routes>
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
    }else{
        return(
            <div>
                <BrowserRouter>
                    <Loging/>
                    <Footer/>
                </BrowserRouter>
                
            </div>
        
        )
    }
    
}
export default App;