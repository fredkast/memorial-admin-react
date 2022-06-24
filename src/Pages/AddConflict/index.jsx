// Component Create unit

import React,{  useState } from "react";
import { useNavigate } from 'react-router-dom';


function AddConflict() {

    let navigate = useNavigate()

    const [Date, setDate] = useState([])
    const [Lieu, setLieu] = useState([])
    const [Description, setDescription] = useState([])

    // Body de la requete Create
  const bodyRequest = 
      {
        "date": Date,
        "lieu": Lieu,
        "description": Description,
     }

function create(e){
  e.preventDefault();

  // 2  Sauvegarde des informations vers l'API de MEMORIAL
        fetch('https://api.projet-memorial.fr/conflits/create.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyRequest)
        })
        .then((response) => response.json()
        .then((data) =>{
           console.log(data);
           if(data.message === "Add succesful"){
          alert("Données sauvegardées !")
          navigate("/conflits",{ replace: true })
          }else{
            alert("Erreur : Données non sauvegardées !")
          }
        })
        .catch((error) =>{ console.log(error)
        alert("Echec sauvegarde ! Veuillez remplir tous les champs.")
        })
        )
			
		
    }

  return (
    <div className="main-container">
    <h1 className="title">Ajouter un conflit</h1>
    <p className="underline">Ajouter un conflit dans la base de données de Memorial</p>

    <div className='first-container'>
        <form className="form" >   
            <div className="display_row">
                <div className="input_field">
                  <label htmlFor="input_text">Lieux :</label>
                  <input id="name" type="text" data-length="4" onChange={(e) => setLieu(e.target.value)}/>
                </div>
                
            </div>
 
            <div className="textarea-container">
              
                <label htmlFor="input_text">Dates :</label>
                <textarea id="circonstence" type="text" data-length="4" onChange={(e) => setDate(e.target.value)}/>
              
            </div>

            <div className="textarea-container">
                <label htmlFor="input_text">Description :</label>
                <textarea id="biographie" type="text" data-length="4" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            
           
         

            <button className='btn-green' onClick={create} >Ajouter</button>
          </form>
        </div>
  </div>
  );
}

export default AddConflict;
