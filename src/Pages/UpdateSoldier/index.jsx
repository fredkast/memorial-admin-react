import '../../Styles/listSoldier.css'
import React,{  useState } from "react";
import { useLocation } from "react-router-dom"

// Il faut modifier le soldierFind via ce que l'on tape dans les input
// pour ensuite envoyer le body modifier a l'api


function UpdateSoldier(){



// State de l'id a modifier
  const [textToFind, setidToUpdate] = useState([])
  // on formate pour le body de requete api
  const idToUpdate = 
  {
    id:textToFind
  }

// Le state avec les donnees du soldat trouvé
const [soldiersFind, setSoldiersToFind] = useState([
  {
    id: "",
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
// on initialise un objet vide dans le cas ou l'id n'existe pas
let emptySoldier = {
  id: "X",
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


// on recupere l'id du soldat sur lequel on cliquer depuis ListSoldiers
// const {state} = useLocation();
// const { id } = state;
// console.log(id)
// setidToUpdate(id)

// console.log(soldiersFind)
// console.log(JSON.stringify(idToUpdate))
// console.log(JSON.stringify(soldiersFind.nom))

//ETAPE 1 recherche du soldat pour hydrater la requete API
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
     .catch(() => {
      // on vide soldiersFind si il n'y pas cet id dans la BDD 
     setSoldiersToFind(emptySoldier);
      })
     )}
    
    
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
    
  // si le soldat existe (soldiersFind != est vide)
  if (!(soldiersFind.id == "X") ){
    return(     
      <div className="container-data">
        <h1 className="title">Modifier un soldat</h1>
        <div className='first-container'>
              <form className="form" >

                {/* recherche du soldat avec cet ID */}
                <div className="second-container">         
                    <label htmlFor="input_text">ID à rechercher :</label>                  
                    <input id="id_input" type="number" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
                    <button className='btn-green'  onClick={searchThisId} >Rechercher ce soldat</button>
                </div>

                <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Nom :</label>
                      <input id="name" type="text" data-length="4" value={soldiersFind.nom} />
                      {/* (datas=>({ ...datas,[index]: e.target.value})) */}
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
                    <input id="grade" type="text" value={soldiersFind.grade}/>
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
  
  return(
    <div className="container-data">
    <h1 className="title">Modifier un soldat</h1>
    <div className='first-container'>
          <form className="form" >

            {/* recherche du soldat avec cet ID */}
            <div className="second-container">         
                <label htmlFor="input_text">ID à rechercher :</label>                  
                <input id="id" type="number" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
                <button className='btn-green'  onClick={searchThisId} >Rechercher ce soldat</button>
                <h2 className='text_aligne'>Ce soldat n'existe pas dans la base de données</h2>
            </div>

            {/* <button className='btn-yellow'  onClick={updateAPI} >
                Modifier
            </button> */}
          </form>
          </div>
  </div>
  );
}

export default UpdateSoldier
