// Component Update Unit

import React,{  useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';

function UpdateUnit(){
  // Redirections
  let navigate = useNavigate()

  const {state} = useLocation();

    // on creer un state des champs qui seront hydraté avec les nouvelles donneées des input
  const [Id, setId] = useState([])
  const [Lieu, setLieu] = useState([])
  const [Name, setName] = useState([])
  const [Description, setDescription] = useState([])

  // ---------------------------------***** ETAPE 1 : afficher les données de l'unitee (id passé par UnitList) depuis l'api
  
  // GET unit's data request
  useEffect(() => {
    fetch('https://api.tytnature.fr/unitees/read.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id":state.id,
      }),
    })
    .then((response) => response.json()
    .then((data) =>{
       setId(data.id)
       setLieu(data.lieux)
       setName(data.nom)
       setDescription(data.Description)     
    },
    )
    .catch(() => {
      console.log("Fail API request")
      alert("Erreur dans la reécupération de données !")
      })
    )},
  [])
  //--------------------------------------------------------**** ETAPE 2 methode UPDATE modification du soldat trouvé
  
  const bodyRequestForUpdate = 
  // UPDATE request's body
    {
      "id": Id,
      "nom": Name,
      "lieu": Lieu,
      "description": Description,
    }
 
  function updateAPI(e){
    e.preventDefault();
        fetch(`https://api.tytnature.fr/unitees/update.php`, {
          method: 'POST',
          body: JSON.stringify(bodyRequestForUpdate),
        })
        .then((response) => response.json()
        .then(() =>{
            console.log('UPDATE',"Données sauvegardées !")
            alert("Données modifiées !");
            navigate("/unitees",{ replace: true })
        })
        .catch((error) => {
          console.log(error)
          alert("Une erreur est survenue !");
        }
        ))
      }

  

  return(     
        <div className="container-data">
          <h1 className="title">Modifier l'unitée n°{state.id}</h1>
          <p className="underline">Modifier les champs </p>

          <div className='first-container'>
                <form className="form" >

                  <div className="display_row">
                      <div className="input_field">
                        <label htmlFor="input_text">Nom : </label>
                        <input className="full-width-input" type="text"  value={Name} onChange={e => setName(e.target.value)} />
                      </div>
                    
                  </div>

                  <div className="display_row">
                   
                    <div className="input_field">
                      <label htmlFor="input_text">Lieux : </label>
                      <input className="full-width-input" type="text" data-length="4" value={Lieu} onChange={(e) => setLieu(e.target.value)} />
                    </div>
                  </div>
                  <div className="textarea-container">
                    
                      <label htmlFor="input_text">Description :</label>
                      <textarea style={{padding:10}} type="text" data-length="4" value={Description} onChange={(e) => setDescription(e.target.value)} />
                    
                  </div>
                 
                  

                {/* SUBMIT */}
                  <div className="display_row">
                    <Link className="btn-red" style={{textAlign:"center",fontSize:"auto"}}  to="/">
                      Annuler
                    </Link>
                    <button className='btn-green'  onClick={updateAPI} >
                      Modifier
                    </button>
                  </div>
                </form>
          </div>
        </div>
      );
    }


export default UpdateUnit
