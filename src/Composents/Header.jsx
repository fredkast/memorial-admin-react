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
                <label for="menu-toggle-1">Soldat</label>
                <input type="checkbox" id="menu-toggle-1"/>
                <ul id="menu-1">
                    <li><Link className="link" to="/soldats">Liste des soldats</Link></li>
                    <li><Link className="link" to="/chercher-soldat">Chercher un soldat</Link></li>
                    <li><Link className="link" to="/chercher-par-date">Chercher par date</Link></li>
                    <li><Link className="link" to="/ajouter">Ajouter un soldat</Link></li>
                </ul>
                <label for="menu-toggle-2">Unitées</label>
                <input type="checkbox" id="menu-toggle-2"/>
                <ul id="menu-2">
                    <li><Link className="link" to="/unitees">Liste Unitées</Link></li>
                    <li><Link className="link" to="/unitee-ajouter">Ajouter une unitée</Link></li>
                </ul>
                <label for="menu-toggle-3">Conflits</label>
                <input type="checkbox" id="menu-toggle-3"/>
                <ul id="menu-3">
                    <li><Link className="link" to="/conflits">Liste conflit</Link></li>
                    <li><Link className="link" to="/conflits-ajouter">Ajouter un conflit</Link></li>
                 </ul>       
            </div>
        </div>

    )
}


export default Header