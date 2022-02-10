import '../../Styles/listSoldier.css'
import React,{ useEffect, useState } from "react";

// IL FAUT HYDRATER BODY AVEC LA REQUETE JSON VIA DES INPUT
// Etape 1 on get les données du soldat pour les introduire dans les input ensuit on hydrate soldierFind puis on appel askApi()


// PORBLEME DE FORMAT JSON !!

function UpdateSoldier(){


  const [soldiersFind, setSoldiersToFind] = useState([])
// State de l'id a modifier
  const [textToFind, setidToUpdate] = useState([])
 // on format pour le body de requete api
  const idToUpdate = 
  {
    id:textToFind
  }

  // recherche du soldat pour hydrater
  function searchThisId(e){
    e.preventDefault();
    fetch('https://api.tytnature.fr/soldats/read.php', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       // le text format JSON
       body: JSON.stringify(idToUpdate),
     })
     .then((response) => response.json()
     .then((data) =>{
       // on insere dans le state soldiersFind pour afficher dans la liste 
      setSoldiersToFind(data);
     })
     .catch((error) => console.log(error))
     )}
    
    
    // modification du soldat trouvé
   function updateAPI(e){
     // empecher de re render le component au click
    e.preventDefault();
    fetch('https://api.tytnature.fr/soldats/update.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          {
            id: "4",
            nom: "REACT",
            prenom: "REACT",
            grade:"Soldat de 2eme classe",
            age: "33",
            deces: "2022-02-02",
            armee: "1",
            unitee: "1",
            theatre: "1",
            biographie:  "test",
            circonstance: "MODIIFER DEPUIS REACT",
            sepulture: "test",
            image: "https://api.tytnature.fr/image/soldat/unknow-soldier.jpeg"
          }
        )
      })
      .then((response) => response.json()
      .then((data) =>{
        console.log(data.message);
      })
      .catch((error) => console.log(error))
      )}
    
      console.log(soldiersFind)
      console.log(idToUpdate)

  return(     
    <div className="container-data">
      <h1 className="title">Modifier un soldat</h1>
      <div className='first-container'>
            <form className="form" >
              <div className="second-container">
             
                  <label htmlFor="input_text">id à rechercher :</label>

                  {/* recherche du soldat avec cet ID */}
                  <input id="id" type="number" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
                  <button className='btn-green'  onClick={searchThisId} >Rechercher</button>

              
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Nom :</label>
                  <input id="name" type="text" data-length="4" />
                  
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Prénom :</label>
                  <input id="prenom" type="text" data-length="4" />
                 
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Age :</label>
                  <input id="age" type="number" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Grade :</label>
                  <input id="grade" type="text" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Date déces :</label>
                  <input id="deces" type="date" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Conflit :</label>
                  <input id="conflit" type="text" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Armée :</label>
                  <select name="armee" id="armee">
                      <option value="1">Armée de Terre</option>
                      <option value="2">Armée de l'Air</option>
                      <option value="3">Marine National</option>
                      <option value="4">Gendarmerie National</option>
                      <option value="5">Autre</option>
                  </select>
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Unitée :</label>
                  <input id="unitee" type="number" data-length="4" />
                </div>
              </div>
              <div className="textarea-container">
                
                  <label htmlFor="input_text">Circonstences du déces :</label>
                  <textarea id="circonstence" type="text" data-length="4" />
                
              </div>
              <div className="textarea-container">
              
                  <label htmlFor="input_text">Biographie :</label>
                  <textarea id="biographie" type="text" data-length="4" />
                
              </div>
              
              <div className="textarea-container">
                  <label htmlFor="input_text">Lieu de sépulture</label>
                  <textarea id="sepulture" type="text-area" data-length="4" />
               
              </div>
              <button className='btn-yellow'  onClick={updateAPI} >
                  Modifier
              </button>
            </form>
            </div>
    </div>
    
  );
}

export default UpdateSoldier
