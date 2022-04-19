// Composent Loging

// TODO : Widget avec le nombre de données dans la BDD

import React,{ useState } from "react";
import { useNavigate  } from "react-router-dom";
import "../../Styles/style.css";


function Loging(){

    // redirection
  let navigate = useNavigate()

  const [Username, setUsername] = useState([])
  const [Password, setPassword] = useState([])

  function connectToAPI(e){
    e.preventDefault();
    var bodyRequest = JSON.stringify(
      {
        "username":Username,
        "password":Password
      }
    )
    console.log(bodyRequest)
      fetch('http://localhost/API/api-memorial/config/connect.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 
          bodyRequest,
      })
      .then((response) => response.json()
      .then((data) =>{
        // les identifiants sont bons
        if(data === "User loging : success."){
          alert("Connecté");
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
      <div className="container-data">
        <h1>Memorial gestion de la base de données</h1>
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
