import '../../Styles/listSoldier.css'
import React,{ useEffect, useState } from "react";

// IL FAUT HYDRATER BODY AVEC LA REQUETE JSON VIA DES INPUT



function UpdateSoldier(){
  const [soldiersFind, setSoldiersToFind] = useState([])

// const [requete, setRequete] = useState(null);

// appelr l'api dans une fonction
  
   function askApi(e){
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
  
  return(     
    <div className="container-data">
      <h1 className="title">Modifier un soldat</h1>
      <div className='form-container'>
            <form className="form" >
              <div className="input-row">
                <div className="input-field">
                  <label htmlFor="input_text">id</label>
                  <input id="id" type="number" data-length="4" />
                  
                </div>
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
                  <input id="grade" type="number" data-length="4" />
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
                  <input id="armee" type="number" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Unitée :</label>
                  <input id="unitee" type="number" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Circonstences du déces :</label>
                  <textarea id="circonstence" type="text" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Biographie :</label>
                  <textarea id="biographie" type="text" data-length="4" />
                </div>
              </div>
              <div className="">
                <div className="input-field">
                  <label htmlFor="input_text">Lieu de sépulture</label>
                  <textarea id="sepulture" type="text-area" data-length="4" />
                </div>
              </div>

        

              <button className='btn-yellow'  onClick={askApi} >
                  Modifier
              </button>
            </form>
            </div>
    </div>
  );
}
export default UpdateSoldier
