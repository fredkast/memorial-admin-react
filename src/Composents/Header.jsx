// Component Header

import '../Styles/header.css'
import React,{ useState } from "react";
import { useNavigate,Link } from 'react-router-dom';

function Header(){
      // redirection
    let navigate = useNavigate()

    // State du curseur

    const [themeDark, setThemeDark ] = useState(true)
    const [color_icon_light, setColorIconLight] = useState()
    const [color_icon_dark, setColorIconDark] = useState()

    // si checked alors on inverse la valeur de check
    function handleCheck(){
        setThemeDark(!themeDark);
        if(themeDark === false){    
            document.getElementById("color_icon_dark").style.visibility = "visible";
            document.getElementById("color_icon_light").style.visibility = "hidden";

            document.getElementsByTagName('Body')[0].classList.add('light');

        }
        else if(themeDark === true){
            setThemeDark(!themeDark);
            document.getElementById("color_icon_dark").style.visibility = "hidden";
            document.getElementById("color_icon_light").style.visibility = "visible";

            document.getElementsByTagName('Body')[0].classList.remove('light');

        }
        console.log("theme-dark-mode: "+themeDark)
    };

   
    // LOG OUT

    function logout(){
        // vider les cookies pour se deconnecter
        sessionStorage.clear();        
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
                <a className="link-sidenav" href="https://www.defense.gouv.fr/" target="_blank">Site vitrine Memorial.fr</a>
                <a className="link-sidenav" href="https://www.defense.gouv.fr/" target="_blank">Ministère des armées</a>
                <a className="link-sidenav" href="https://www.defense.gouv.fr/" target="_blank">Instagram Memorial</a>
                <div>
                    <p style={{color:'white', cursor:'pointer', paddingRight:20}} onClick={(e) => logout()}>Se deconnecter</p>
                </div>
                <div className='display-row'>
                    <p id="color_icon_light" style={{padding:20}}>Light Mode</p>
                    <label className="switch">
                        <input type="checkbox" id="dark-mode" onChange={handleCheck} ></input>
                        <span className="slider round"></span>
                    </label>
                    <p id="color_icon_dark" style={{padding:20}}>Dark Mode</p>
                </div>                
            </div>
            <div className='header-lower_line'> 
                <div class="navigation">
                <a >Soldats</a>
                <div class="navigation-content">
                    <Link className="link" to="/soldats">Liste des soldats</Link>
                    <Link className="link" to="/chercher-soldat">Chercher un soldat</Link>
                    <Link className="link" to="/chercher-par-date">Chercher par date</Link>
                    <Link className="link" to="/ajouter">Ajouter un soldat</Link>
                </div>
                </div>
                <div class="navigation">
                <a>Unitées</a>
                <div class="navigation-content">
                    <Link className="link" to="/unitees">Liste Unitées</Link>
                    <Link className="link" to="/unitee-ajouter">Ajouter une unitée</Link>
                
                </div>
                </div>
                <div class="navigation">
                <a>Conflits</a>
                <div class="navigation-content">
                    <Link className="link" to="/conflits">Liste conflit</Link>
                    <Link className="link" to="/conflits-ajouter">Ajouter un conflit</Link>
                </div>
                </div>
                <div class="navigation">
                    <Link className="link" to="/">Tableau de bord</Link>
                </div>
            </div>
        </div>

    )
}


export default Header