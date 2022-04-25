// Composent Loging

// TODO : Widget avec le nombre de données dans la BDD

import React,{ useState } from "react";
import { useNavigate  } from "react-router-dom";
import "../../Styles/login.css";


function Loging(){

    // redirection
  let navigate = useNavigate()

  const [Username, setUsername] = useState([])
  const [Password, setPassword] = useState([])


  // LOGIN VIA L'API + COOKIES
  function connectToAPI(e){
    e.preventDefault();
    var bodyRequest = 
      {
        "username":Username,
        "password":Password
      }
    
      fetch('https://api.tytnature.fr/config/connect.php', {
        method: 'POST',
        body: 
        JSON.stringify(bodyRequest),
      })
      .then((response) => response.json()
      .then((data) =>{
        // les identifiants sont bons
        if(data === "User loging : success."){
          alert("Vous etes Connecté");
          // Creation d'un cookies pour rester connecté
          //-----------> TODO remplacer par un token !

          sessionStorage.setItem('user', Username)
          navigate('/dashboard');
          window.location.reload(false);

        }else{
          // le mot de passe ou l'identifiant est incorrect
          alert(data)
        }
      })
      // Un des champs est vide ou la requete a echouée
      .catch((error) =>{ 
          console.log(error.message);
          alert("Echec de la methode connection ou les identifiants sont vides!")
        })
      )
  }
    return(
      <div  className="login-container">
         <p className='h1-like'>Projet Memorial  </p>
        <h1>Gestion de la base de données</h1>
        <p className="underline">Bienvenue</p>

        <div className='first-container'>
        <h2 className="title">Se connecter<hr width="50"></hr></h2>
          <form>
            <label  htmlFor="input_text">Nom d'utilisateur :</label>
                        <input id="username" type="text" onChange={e => setUsername(e.target.value.trim())} />
            <label  htmlFor="input_text">Mot de passe :</label>
                        <input id="username" type="text" onChange={e => setPassword(e.target.value.trim())} />
          
            <button className='btn-green'  onClick={connectToAPI} >
                      Connecter
            </button>
          </form>

        </div>
        
      </div>
    )
  }

export default Loging
