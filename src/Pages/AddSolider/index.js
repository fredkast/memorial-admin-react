import React,{  useState } from "react";

function Add() {

    const [soldierToCreate, setsoldierToCreate] = useState([
        {
          nom: "",
          prenom: "",
          grade:"",
          age: "",
          deces: "",
          armee: "",
          unitee: "",
          theatre: "",
          biographie:  "",
          circonstance: "",
          sepulture: "",
          image: ""
        }
      ])
function createSoldier(e){
    // empecher de re render le component au click
   e.preventDefault();
   fetch('https://api.tytnature.fr/soldats/create.php', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(
         {
           nom: JSON.stringify(soldierToCreate.nom),
           prenom: JSON.stringify(soldierToCreate.prenom),
           grade: JSON.stringify(soldierToCreate.grade),
           age: JSON.stringify(soldierToCreate.age),
           deces: JSON.stringify(soldierToCreate.deces),
           armee: JSON.stringify(soldierToCreate.armee),
           unitee: JSON.stringify(soldierToCreate.unitee),
           theatre: JSON.stringify(soldierToCreate.theatre),
           biographie:  JSON.stringify(soldierToCreate.biographie),
           circonstance: JSON.stringify(soldierToCreate.circonstance),
           sepulture: JSON.stringify(soldierToCreate.sepulture),
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


  return (
    <div className="container-data">
    <h1 className="title">Ajouter un soldat</h1>
    <div className='first-container'>
          <form className="form" >

           

            <div className="display_row">
                <div className="input_field">
                  <label htmlFor="input_text">Nom :</label>
                  <input id="name" type="text" data-length="4" onChange={(e) => setsoldierToCreate(e.target.value)}/>
                </div>
                <div className="input_field">
                  <label htmlFor="input_text">Prénom :</label>
                  <input id="prenom" type="text" data-length="4"  />
                </div>
            </div>

            <div className="display_row">
              <div className="input_field">
                <label htmlFor="input_text">Age :</label>
                <input id="age" type="number" data-length="4"/>
              </div>
              <div className="input_field">
                <label htmlFor="input_text">Grade :</label>
                <select name="grade" id="grade">
                    <option value="1">Soldat de 2eme classe</option>
                    <option value="2">Soldat de 1ere classe</option>
                    <option value="3">Caporal</option>
                    <option value="4">Caporal-chef</option>
                    <option value="5">Caporal-chef de 1ere classe</option>
                    <option value="6">Sergent</option>
                    <option value="7">Sergent-Chef</option>
                    <option value="8">Adjudant</option>
                    <option value="9">Adjudant-Chef</option>
                    <option value="10">Major</option>
                    <option value="11">Sous-Lieutenant</option>
                    <option value="12">Lieutenant</option>
                    <option value="13">Capitaine</option>
                    <option value="15">Commandant</option>
                    <option value="16">Lieutenant-Colonel</option>
                    <option value="17">Colonel</option>
                    <option value="18">Géneral de Brigade</option>
                    <option value="19">Géneral de Division</option>
                    <option value="20">Géneral de Corps d'Armée</option>
                    <option value="21">Géneral de d'Armée</option>

                </select>
              </div>
            </div>

            <div className="display_row">
              <div className="input_field">
                <label htmlFor="input_text">Date déces :</label>
                <input id="deces" type="date" data-length="4" />
              </div>
              <div className="input_field">
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

          
              <div className="input_field">
                <label htmlFor="input_text">Conflit :</label>
                <input id="conflit" type="text" data-length="4" />
              </div>
            
              
            
              <div className="input_field">
                <label htmlFor="input_text">Unitée :</label>
                <input id="unitee" type="text" data-length="4" />
              </div>
          

            <div className="textarea-container">
              
                <label htmlFor="input_text">Circonstences du déces :</label>
                <textarea id="circonstence" type="text" data-length="4" />
              
            </div>
            <div className="textarea-container">
            
                <label htmlFor="input_text">Biographie :</label>
                <textarea id="biographie" type="text" data-length="4"/>
              
            </div>
            
            <div className="textarea-container">
                <label htmlFor="input_text">Lieu de sépulture*</label>
                <textarea id="sepulture" type="text-area" data-length="4"/>
            </div>
            <div>
                <label htmlFor="input_text">Image par défault</label>
                <input id="image_default" type="radio"/>
            </div>

            <button className='btn-submit' onClick={createSoldier} >
                Ajouter
            </button>
          </form>
          </div>
  </div>
  );
}

export default Add;
