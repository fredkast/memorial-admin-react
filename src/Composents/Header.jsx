// Component Header

import '../Styles/header.css'
import React,{ useState } from "react";
import { Link } from 'react-router-dom';

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
            <div className='header-upper_line' >
                <div style={{width:'80%'}}>
                    <p id="site_logo" className='h1-like'> <Link style={{fontSize:40}} to="/">Projet Memorial </Link> </p>
                </div>
                <div><img src="" alt="" />Mon compte</div>
            </div>
            <div className='header-lower_line'>
                <div style={{width:'80%'}}>
                    <div>
                        <Link id='nav_add_soldier_link' className="link" to="/add">Ajouter un soldat</Link>
                        <Link className="link" to="/search">Chercher un soldat</Link>
                        <Link className="link" to="/SearchByCurrentDate">Chercher une date</Link>
                        <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
                    </div>
                </div>
            </div>
        </div>
    //     <div className='display-row'>
    //     <img className='icon-darkmode' src={"img/sun.png"} alt="dark-mode" />
    //     <label className="switch">
    //         <input type="checkbox" id="dark-mode" onChange={handleCheck} ></input>
    //         <span className="slider round"></span>
    //     </label>
    //     <p className={color} >Dark Mode</p>

    //     <img className="icon-darkmode"  src={"img/moon.png"} alt="dark-mode" />
    // </div>
    )
}


export default Header