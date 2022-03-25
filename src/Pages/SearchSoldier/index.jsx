// Component Search By ID

import React,{  useState } from "react";

function SearchSoldier(){

  // State de l'id a modifier
    const [textToFind, setidToUpdate] = useState([])
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
        console.log(data)
      })
      .catch(() => {
        // on vide soldiersFind si il n'y pas cet id dans la BDD 
      setSoldiersToFind(emptySoldier);
        })
      )}
      
    // si le soldat existe (soldiersFind != est vide)
    if (!(soldiersFind.id == "X") ){
      return(     
        <div className="container-data">
          <h1 className="title">Chercher un soldat</h1>
          <p className="underline">Chercher par ID</p>
           {/* recherche du soldat avec cet ID */}
           <div className="first-container">         
                      <label htmlFor="input_text" style={{margin:5}}>ID à rechercher :</label>                  
                      <input id="id_input" type="number" min="1" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
                      <button className='btn-green'  onClick={searchThisId} >Rechercher ce soldat</button>
                  </div>
          <div className="first-container ">

            <div className="display_row">
                <h2> <span style={{margin:5, color:"white", fontSize:30}}>{soldiersFind.grade}</span></h2>
                <h2> <span style={{margin:5, color:"white", fontSize:30}}>{soldiersFind.nom}</span></h2>
                <h2> <span style={{margin:5, color:"white", fontSize:30}}>{soldiersFind.prenom}</span></h2>

            </div>
                
            <div className="display_row" style={{justifyContent:"center"}}>
              <img className="soldier-img" src={soldiersFind.image} ></img>
            </div>

            <div className="display_row"> 
              <ul>
                <p>Date de déces : <span style={{margin:0, color:"grey"}}>{soldiersFind.date_deces}</span></p>
                <p>Age : <span style={{margin:0, color:"grey"}}>{soldiersFind.age} ans</span></p>
                <p>Mort pour la France en/au : {soldiersFind.conflit}</p>
              </ul>
              <ul>
              </ul>
            </div>
           
              <p style={{margin:15}}>Armée : <span style={{marginLeft:5, color:"grey"}}>{soldiersFind.armee}</span></p>
              <p style={{margin:15}}>Unitée : <span style={{margin:5, color:"grey"}}>{soldiersFind.unitee}</span></p>

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
          {/* <div className='first-container'>
                <form className="form" >
                  <div className="display_row">
                      <div className="input_field">
                        <label htmlFor="input_text">Nom :</label>
                        <input id="name" type="text" data-length="4" value={soldiersFind.nom} />
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
                </form>
          </div> */}
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
                  <input id="id_input" type="number" min="1" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
                  <button className='btn-green'  onClick={searchThisId} >Rechercher ce soldat</button>
                  <h2 className='text_aligne'>Ce soldat n'existe pas dans la base de données</h2>
              </div>
            </form>
            </div>
    </div>
    );
}

export default SearchSoldier
