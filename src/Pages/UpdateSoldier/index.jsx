// Component Update Soldier

import React,{  useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';

// TODO : Changer de photo

function UpdateSoldier(){

  // ---------------------------------***** ETAPE 1 : afficher les données du soldat (id passé par SoldierList) depuis l'api
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
      // on incrémente dans le state soldiersFind pour afficher dans les input
      setSoldiersToFind(data);

console.log(data)
    })
    .catch(() => {
      console.log("Fail API request")
      alert("Erreur dans la reécupération de données")
      })
    )},
  [])

  // Les données du soldat trouvé incremente soldierFind
  const [soldiersFind, setSoldiersToFind] = useState([
    {}
  ])
  

console.log(soldiersFind.nom)



  //--------------------------------------------------------**** ETAPE 2 methide UPDATE modification du soldat trouvé

  // on creer un state des champs qui seront hydraté avec les nouvelles donneées des input
  // id est récupéré depuis le soldat créé via l'etape 1

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
  const [Gender, setGender] = useState([])

  function updateAPI(e){
      e.preventDefault();
      const bodyRequestForUpdate = 
       {
        "id": soldiersFind.id,
        "nom": Name,
        "prenom": Firstname,
        "grade": Grade,
        "age": Age,
        "deces": Date,
        "armee": Army,
        "unitee": Unit,
        "theatre": Conflit,
        "biographie":  Bio,
        "circonstance": Circ,
        "sepulture": Sepult,
        "gender": Gender,
        "image": "https://api.tytnature.fr/image/soldat/unknow-soldier.jpeg"
       }

      console.log(bodyRequestForUpdate)

      fetch('https://api.tytnature.fr/soldats/update.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyRequestForUpdate)
        })
        .then((response) => response.json()
        .then((data) =>{
          console.log("REPONSE :"+ data)
        })
        .catch(
          (error) => {
            console.log("ERROR: "+error)
          })
        )}
      
      return(     
        <div className="container-data">
          <h1 className="title">Modifier le soldat n°{state.id}</h1>
          <p className="underline">Modifier les champs </p>

          <div className="first-container ">
            <div className="display_row" style={{justifyContent:"center"}}>
              <img className="soldier-img" src={soldiersFind.image} ></img>
            </div>
            <div className="display_row"> 
              <ul>
                <p>Grade : <span style={{margin:0, color:"grey"}}>{soldiersFind.grade}</span></p>
                <p>Nom : <span style={{margin:0, color:"grey"}}>{soldiersFind.nom}</span></p>
                <p>Prénom : <span style={{margin:0, color:"grey"}}>{soldiersFind.prenom}</span></p>
                <p>Date de déces : <span style={{margin:0, color:"grey"}}>{soldiersFind.date_deces}</span></p>
                <p>Genre : <span style={{margin:0, color:"grey"}}>{ soldiersFind.gender}</span></p>

              </ul>
              <ul>
                <p>Age : <span style={{margin:0, color:"grey"}}>{soldiersFind.age}</span></p>
                <p>Armée : <span style={{margin:0, color:"grey"}}>{soldiersFind.armee}</span></p>
                <p>Unitée : <span style={{margin:0, color:"grey"}}>{soldiersFind.unitee}</span></p>
                <p>Conflit : <span style={{margin:0, color:"grey"}}>{soldiersFind.conflit}</span></p>

              </ul>
            </div>
            <div className="display_row" style={{justifyContent:"space-between"}}>
              <ul>
                <p>Biographie : </p>
                <span style={{margin:0, color:"grey"}}>{soldiersFind.biographie}</span>
                <p>Circonstances : </p>
                <span style={{margin:0, color:"grey"}}>{soldiersFind.circonstance}</span>
                <p>Sépulture : </p>
                <span style={{margin:0, color:"grey"}}>{soldiersFind.sepulture}</span>
              </ul>
            </div>
          </div>
          <div className='first-container'>
                <form className="form" >
                  <div className="display_row">
                      <div className="input_field">
                        <label htmlFor="input_text">Nom : <span style={{margin:0, color:"grey"}}>{soldiersFind.nom}</span></label>
                        <input id="name" type="text"  value={soldiersFind.nom}  required/>

                        {/* <TextField id="name" type="text"  value={nom} onChange={(e) => setName(e.target.value)} required/> */}


                      </div>
                      <div className="input_field">
                        <label htmlFor="input_text">Prénom : <span style={{margin:0, color:"grey"}}>{soldiersFind.prenom}</span></label>
                        <input id="prenom" type="text"  placeholder={soldiersFind.prenom} onChange={(e) => setFirstname(e.target.value)} required/>
                      </div>
                  </div>
                  <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Age :</label>
                      <input id="age" type="number"  placeholder={soldiersFind.age} onChange={(e) => setAge(e.target.value)} required/>
                    </div>
                    <div className="input_field">
                      <label htmlFor="input_text">Date déces : <span style={{margin:0, color:"grey"}}>{soldiersFind.date_deces}</span>*</label>
                      <input id="deces" type="date" data-length="4" placeholder={soldiersFind.date_deces} onChange={(e) => setDate(e.target.value)} required/>
                    </div>
                    
                  </div>
                  <div className="display_row">
                    <div className="input_field">
                        <label htmlFor="input_text">Grade* : <span style={{margin:0, color:"grey"}}>{soldiersFind.grade}</span></label>
                        <select name="grade" id="grade" onChange={(e) => setGrade(e.target.value)} required>
                          <option value="" disabled selected>Selectionner un grade</option>
                          <option value="Soldat de 2eme classe">Soldat de 2eme classe</option>
                          <option value="Soldat de 1ere classe">Soldat de 1ere classe</option>
                          <option value="Caporal">Caporal</option>
                          <option value="Caporal-chef">Caporal-chef</option>
                          <option value="Caporal-chef de 1ere classe">Caporal-chef de 1ere classe</option>
                          <option value="Sergent">Sergent</option>
                          <option value="Sergent-Chef">Sergent-Chef</option>
                          <option value="Adjudant">Adjudant</option>
                          <option value="Adjudant-Chef">Adjudant-Chef</option>
                          <option value="Major">Major</option>
                          <option value="Sous-Lieutenant">Sous-Lieutenant</option>
                          <option value="Lieutenant">Lieutenant</option>
                          <option value="Capitaine">Capitaine</option>
                          <option value="Commandant">Commandant</option>
                          <option value="Lieutenant-Colonel">Lieutenant-Colonel</option>
                          <option value="Colonel">Colonel</option>
                          <option value="Géneral de Brigade">Géneral de Brigade</option>
                          <option value="Géneral de Division">Géneral de Division</option>
                          <option value="Géneral de Corps d'Armée">Géneral de Corps d'Armée</option>
                          <option value="Géneral de d'Armée">Géneral de d'Armée</option>
                        </select>
                      </div>
                  </div>
                  <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Armée* :<span style={{margin:0, color:"grey"}}> {soldiersFind.armee}</span></label>
                      <select name="armee" id="armee" onChange={(e) => setArmy(e.target.value)} required>
                          <option disabled selected  >Selectionner une armée</option>
                          <option value="1">Armée de Terre</option>
                          <option value="2">Armée de l'Air</option>
                          <option value="3">Marine National</option>
                          <option value="4">Gendarmerie National</option>
                          <option value="5">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="display_row">
                    <label>Genre:</label>
                    <div className="display_row">
                      <label for="male">Homme :</label>
                        <input type="radio" name="gender" id="male" value="MALE" onChange={(e) => setGender(e.target.value)}/>
                        <label for="female" >Femme :</label>
                        <input type="radio" name="gender" id="female" value="FEMALE" onChange={(e) => setGender(e.target.value)}/>
                    </div>
                  </div>

                    <div className="input_field">

                      <label htmlFor="input_text">Conflit* :<span style={{margin:0, color:"grey"}}> {soldiersFind.theatre}</span></label>
                      <select name="conflit" id="conflit" onChange={(e) => setConflit(e.target.value)} required>
                        <option disabled selected  >Selectionner un conflit</option>
                        <option value="1">Mali</option>
                      </select>
                    </div>

                    <div className="input_field">
                      <label htmlFor="input_text">Unitée : <span style={{margin:0, color:"grey"}}> {soldiersFind.unitee}</span></label>
                      <select name="unitee" id="unitee" onChange={(e) => setUnit(e.target.value)} required>
                          <option disabled selected  >Selectionner une unitée</option>
                          <option value="1">3eme Regiment d'Infanterie de Marine</option>
                      </select>
                    </div>
                
                  <div className="textarea-container">
                    
                      <label htmlFor="input_text">Circonstances du déces :</label>
                      <textarea id="circonstence" type="text" data-length="4" placeholder={soldiersFind.circonstance} onChange={(e) => setCirc(e.target.value)} required/>
                    
                  </div>
                  <div className="textarea-container">
                  
                      <label htmlFor="input_text">Biographie :</label>
                      <textarea id="biographie" type="text" data-length="4" placeholder={soldiersFind.biographie} onChange={(e) => setBio(e.target.value)} required/>
                    
                  </div>
                  
                  <div className="textarea-container">
                      <label htmlFor="input_text">Lieu de sépulture*</label>
                      <textarea id="sepulture" type="text-area" data-length="4" placeholder={soldiersFind.sepulture} onChange={(e) => setSepult(e.target.value)} required/>
                  </div>
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


export default UpdateSoldier
