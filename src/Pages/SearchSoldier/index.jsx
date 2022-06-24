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
      fetch('https://api.projet-memorial.fr/soldats/read.php', {
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
        <div className="main-container">
          <h1 className="title">Chercher un soldat</h1>
          <p className="underline">Chercher par ID</p>
           {/* recherche du soldat avec cet ID */}
           <div>         
              <label htmlFor="input_text" style={{margin:5}}>ID à rechercher :</label>                  
              <input id="id_input" type="number" min="1" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
              <button className='btn-green'  onClick={searchThisId} >Rechercher ce soldat</button>
          </div>
          <div className="first-container ">

            <div style={{display:'flex'}}>
                <h2> <span style={{margin:5, color:"white", fontSize:30}}>{soldiersFind.grade}</span></h2>
                <h2> <span style={{margin:5, color:"white", fontSize:30}}>{soldiersFind.nom}</span></h2>
                <h2> <span style={{margin:5, color:"white", fontSize:30}}>{soldiersFind.prenom}</span></h2>

            </div>
                
            <div className="display_row" style={{justifyContent:"center"}}>
              <img className="soldier-img" src={soldiersFind.image} ></img>
            </div>
            <div className="soldier_text">
                <p>Mort pour la France en/au : <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.conflit}</span> le <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.date_deces}</span> à l'age de <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.age} ans.</span></p>
                <p>Le <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.grade} {soldiersFind.nom} </span>apartenait à l'/la <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.armee}</span>, au sein du <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.unitee}</span>.</p>
                <p><span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.biographie}</span></p>
                <p><span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.circonstance}</span></p>
                <p><span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.prenom}</span> repose à/au <span style={{color:'white',fontWeight:'bold'}}>{soldiersFind.sepulture}</span></p>
            </div>
          </div>
        </div>
      );
    }
    
    return(
      <div className="main-container">
      <h1 className="title">Modifier un soldat</h1>
      <div >
              {/* recherche du soldat avec cet ID */}
              <div >         
                  <label htmlFor="input_text">ID à rechercher :</label>                  
                  <input id="id_input" type="number" min="1" data-length="4" onChange={(e) => setidToUpdate(e.target.value)}/>
                  <button className='btn-green'  onClick={searchThisId} >Rechercher ce soldat</button>
                  <h2 className='text_aligne'>Ce soldat n'existe pas dans la base de données</h2>
              </div>
            </div>
    </div>
    );
}

export default SearchSoldier
