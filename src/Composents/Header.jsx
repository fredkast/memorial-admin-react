// Component Header

import '../Styles/header.css'
import React,{ useState } from "react";
import { Link } from 'react-router-dom';
// import moon from '../../public/img/moon.png'

function Header(){
    // State du curseur
    const [check, setChecked ] = useState(true)
    // si checked alors on inverse la valeur de check
    function handleCheck(){
        setChecked(!check);
        if(check === true){    
            setColor("dark")
        }
        else if(check === false){
            setChecked(!check);
            setColor("")
        }
        console.log("Dark-mode: "+check)
    };
    const [color, setColor] = useState(false)

    return(
        <div className='header'>
            <div className='header-container' >
                <Link className="link" to="/">
                    <p className='h1-like'>Memorial </p>
                </Link>
                <div>
                    <Link className="link" to="/search">Chercher un soldat</Link>
                    <Link className="link" to="/SearchByCurrentDate">Chercher une date</Link>
                    <Link className="link" to="/add">Ajouter un soldat</Link>
                    <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
                </div>
                <div className='display-row'>
                    <img className='icon-darkmode' src={"img/sun.png"} alt="dark-mode" />
                    <label className="switch">
                        <input type="checkbox" id="dark-mode" onChange={handleCheck} ></input>
                        <span className="slider round"></span>
                    </label>
                    <p className={color} >Dark Mode</p>

                    <img className="icon-darkmode"  src={"img/moon.png"} alt="dark-mode" />
                </div>
            </div>
        </div>
        
    )
}


export default Header