// Component Header

import '../Styles/header.css'
import React,{ useState } from "react";
import { useNavigate,Link } from 'react-router-dom';

function Header(){
      // redirection
    let navigate = useNavigate()

    // State du curseur
    const [themeDark, setThemeDark ] = useState(true)
    // si checked alors on inverse la valeur de check
    function handleCheck(){
        setThemeDark(!themeDark);
        if(themeDark === false){    
            setColor("light-theme")
            sessionStorage.setItem('theme', 'Light');
        }
        else if(themeDark === true){
            setThemeDark(!themeDark);
            setColor("dark-theme")
            sessionStorage.setItem('theme', 'Dark');
        }
        console.log("theme-dark-mode: "+themeDark)
    };
    const [color, setColor] = useState(false)
   
    // LOG OUT

    function logout(){
        // vider les cookies pour se deconnecter
        localStorage.clear();        
        navigate('/');
        window.location.reload(false);

        // deconnecter dans l'api
        fetch(`https://api.tytnature.fr/config/logout.php`)
        .then((response) => response.json()
        .then((data) =>{
          console.log(data)
          navigate('/');
        })
        .catch((error) => console.log(error))
        )
    }
    


    return(
        <div className='header'>
            <div className='header-upper_line' >
                <div style={{width:'80%'}}>
                    <p id="site_logo" className='h1-like'> <Link style={{fontSize:40}} to="/dashboard">Projet Memorial </Link> </p>
                </div>

                <div><p style={{color:'white', cursor:'pointer', paddingRight:20}} onClick={(e) => logout()}>Se deconnecter</p>
                </div>
                <div className='display-row'>
                    <p className={color} style={{padding:20}}>Light Mode</p>
                    <label className="switch">
                        <input type="checkbox" id="dark-mode" onChange={handleCheck} ></input>
                        <span className="slider round"></span>
                    </label>
                      
                </div>                
            </div>
            <div className='header-lower_line'>
                <div style={{width:'100%'}}>
                    <div>
                        <Link id='nav_add_soldier_link' className="link" to="/add">Ajouter un soldat</Link>
                        <Link className="link" to="/chercher-soldats">Chercher un soldat</Link>
                        <Link className="link" to="/conflits">Conflits</Link>
                        <Link className="link" to="/unitees">Unitées</Link>
                        <Link className="link" to="/chercher-par-date">Chercher une date</Link>
                        <Link className="link" to="/soldats">Liste des soldats</Link>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Header