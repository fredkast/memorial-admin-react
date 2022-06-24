// Component Update Conflict

import React,{  useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom';

function UpdateConflict(){
  // Redirections
  let navigate = useNavigate()

  const {state} = useLocation();

    // on creer un state des champs qui seront hydraté avec les nouvelles donneées des input
  const [Id, setId] = useState([])
  const [Lieu, setLieu] = useState([])
  const [Date, setDate] = useState([])
  const [Description, setDescription] = useState([])

  console.log(state.id)
  // ---------------------------------***** ETAPE 1 : afficher les données du soldat (id passé par SoldierList) depuis l'api
  
  // GET conflict's data request
  useEffect(() => {
    fetch('https://api.projet-memorial.fr/conflits/read.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "id":state.id,
      }),
    })
    .then((response) => response.json()
    .then((data) =>{
       console.log(data)
       setId(data.id)
       setLieu(data.lieu)
       setDate(data.date)
       setDescription(data.description)     
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
      "date": Date,
      "lieu": Lieu,
      "description": Description,
    }
 
  function updateAPI(e){
    e.preventDefault();
        fetch(`https://api.projet-memorial.fr/conflits/update.php`, {
          method: 'POST',
          body: JSON.stringify(bodyRequestForUpdate),
        })
        .then((response) => response.json()
        .then(() =>{
            console.log('UPDATE',"Données sauvegardées !")
            alert("Données modifiées !");
            navigate("/conflits",{ replace: true })
        })
        .catch((error) => {
          console.log(error)
          alert("Une erreur est survenue !");
        }
        ))
      }

  

  return(     
        <div className="main-container">
          <h1 className="title">Modifier le conflit n°{state.id}</h1>
          <p className="underline">Modifier les champs </p>

          <div className='first-container'>
                <form className="form" >
                  <div className="display_row">
                   
                    <div className="input_field">
                      <label htmlFor="input_text">Lieux : </label>
                      <input className="full-width-input" type="text" data-length="4" value={Lieu} onChange={(e) => setLieu(e.target.value)} />
                    </div>
                  </div>
                  <div className="display_row">
                      <div className="input_field">
                        <label htmlFor="input_text">Dates : </label>
                        <input className="full-width-input" type="text"  value={Date} onChange={e => setDate(e.target.value)} />
                      </div>
                    
                  </div>
                  <div className="textarea-container">
                    
                      <label htmlFor="input_text">Description du conflit :</label>
                      <textarea style={{padding:10}} type="text" data-length="4" value={Description} onChange={(e) => setDescription(e.target.value)} />
                    
                  </div>
                {/* SUBMIT */}
                  <div className="display_row">
                    <Link className="btn-red" style={{textAlign:"center",fontSize:"auto"}}  to="/conflits">
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


export default UpdateConflict
