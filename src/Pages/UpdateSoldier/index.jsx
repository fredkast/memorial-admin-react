import React,{  useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

// Le component se rerender automatiquement ce qui empeche de taper dans les input

function UpdateSoldier(){
  
  // Le state avec les donnees du soldat trouvé
  const [soldiersFind, setSoldiersToFind] = useState([
    {}
  ])
// +++>> il faut hydrater chaque champs en dessous

  // on creer un soldat qui sera hydraté avec les nouvelles donneées

  const [Name, setName] = useState([])
  const [Firstname, setFirstname] = useState([])
  const [Grade, setGrade] = useState([])
  const [Age, setAge] = useState([])
  const [Date, setDate] = useState([])
  const [Army, setArmy] = useState([])
  const [Unit, setUnit] = useState([])
  const [Conflit, setConflit] = useState([])
  const [Bio, setBio] = useState([])
  const [Circ, setCirc] = useState([])
  const [Sepult, setSepult] = useState([])

  console.log(Name)

  // Etape 1 : afficher les données du soldat depuis l'api
  const {state} = useLocation();
  const bodyRequest = 
  {
    "id":state.id
  }
  useEffect(() => {
    fetch('https://api.tytnature.fr/soldats/read.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // le text format JSON
      body: JSON.stringify(bodyRequest),
    })
    .then((response) => response.json()
    .then((data) =>{
      // on insere dans le state soldiersFind pour afficher dans la liste 
      setSoldiersToFind(data);
      console.log("Reponse :"+ data)
    })
    .catch(() => {
      // on vide soldiersFind si il n'y pas cet id dans la BDD 
      console.log("Fail API request")
      })
    )},
  [])
  
  //ETAPE 2 UPDATE modification du soldat trouvé
  function updateAPI(e){
      // empecher de re render le component au click
      e.preventDefault();
      fetch('https://api.tytnature.fr/soldats/update.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              id: JSON.stringify(soldiersFind.id),
              nom: JSON.stringify(soldiersFind.nom),
              prenom: JSON.stringify(soldiersFind.prenom),
              grade: JSON.stringify(soldiersFind.grade),
              age: JSON.stringify(soldiersFind.age),
              deces: JSON.stringify(soldiersFind.deces),
              armee: JSON.stringify(soldiersFind.armee),
              unitee: JSON.stringify(soldiersFind.unitee),
              theatre: JSON.stringify(soldiersFind.theatre),
              biographie:  JSON.stringify(soldiersFind.biographie),
              circonstance: JSON.stringify(soldiersFind.circonstance),
              sepulture: JSON.stringify(soldiersFind.sepulture),
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
          <h1 className="title">Modifier le soldat n°{state.id}</h1>
          <div className='first-container'>
                <form className="form" >
                  <div className="display_row">
                      <div className="input_field">
                        <label htmlFor="input_text">Nom :</label>
                        <input id="name" type="text" data-length="4" value={soldiersFind.nom} onChange={(e) => setName(e.target.value)}/>
                      </div>
                      <div className="input_field">
                        <label htmlFor="input_text">Prénom :</label>
                        <input id="prenom" type="text" data-length="4" value={soldiersFind.prenom} />
                      </div>
                  </div>
                  <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Age :</label>
                      <input id="age" type="number" data-length="4" value={soldiersFind.age}/>
                    </div>
                    <div className="input_field">
                      <label htmlFor="input_text">Grade :</label>
                      <select name="grade" id="grade" defaultValue={soldiersFind.grade}>
                        <option value={soldiersFind.grade}>{soldiersFind.grade}</option>
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
                      <input id="deces" type="date" data-length="4" value={soldiersFind.date_deces}/>
                    </div>
                    <div className="input_field">
                      <label htmlFor="input_text">Armée :</label>
                      <select name="armee" id="armee">
                          <option defaultValue={soldiersFind.armee}>{soldiersFind.armee}</option>
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
                      <input id="conflit" type="text" data-length="4" value={soldiersFind.conflit}/>
                    </div>

                    <div className="input_field">
                      <label htmlFor="input_text">Unitée :</label>
                      <input id="unitee" type="text" data-length="4" value={soldiersFind.unitee}/>
                    </div>
                
                  <div className="textarea-container">
                    
                      <label htmlFor="input_text">Circonstences du déces :</label>
                      <textarea id="circonstence" type="text" data-length="4" value={soldiersFind.circonstance}/>
                    
                  </div>
                  <div className="textarea-container">
                  
                      <label htmlFor="input_text">Biographie :</label>
                      <textarea id="biographie" type="text" data-length="4" value={soldiersFind.biographie}/>
                    
                  </div>
                  
                  <div className="textarea-container">
                      <label htmlFor="input_text">Lieu de sépulture*</label>
                      <textarea id="sepulture" type="text-area" data-length="4" value={soldiersFind.sepulture}/>
                  
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
