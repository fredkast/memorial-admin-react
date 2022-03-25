// Composent HomePage

// TODO : Widget avec le nombre de données dans la BDD

import React,{ useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../Styles/style.css";

function HomePage(){
  let navigate = useNavigate()
  function linkToUpdate(){
    navigate("/update",{ replace: true });
  }
  
  const [soldiers, setAllSoldiers] = useState([])
  const [isLoaded, setIsLoaded] = useState([])

  // affichage de la date actuelle
  const d = new Date();
  const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  let currentMonth = month[d.getMonth()];
  const currentDay = d.getDate()
  const currentYear = d.getFullYear();

  useEffect(() => {
    fetch(`https://api.tytnature.fr/soldats/readOfDay.php`)
        .then((response) => response.json()
        .then((data) =>{
          setAllSoldiers(data);
        })
        .catch((error) => 
          console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)),
        )},
  [])


// si il n'y a pas de soldat mort aujourd'hui
if (!soldiers.length){
  return(
    <div className="container-data">
       <h1>Memorial Admin dashboard</h1>
       <p className="underline">Bienvenue</p>

      <div className='first-container'>
      <h2 className="title">Soldat du jour<hr width="50"></hr></h2>
     
        <p>Aucun soldat n'est mort un {currentDay + " " + currentMonth +"."}</p>
      </div>
      <div className="display_row">
        <div className="first-container">
          <h2 className="title">Date du jour<hr width="50"></hr></h2>
          <p style={{fontSize:35, color:'greenyellow',textAlign:"center"}}>{currentDay} {currentMonth} {currentYear}</p>
        </div>
        <div className="first-container">
          <h2 className="title">Ajouter un soldat<hr width="50"></hr></h2>
          <button className="btn-green"><Link className="link" to="/add">Ajouter un soldat</Link></button>
        </div>
        <div className="first-container">
          <h2 className="title">Nombre de Données<hr width="50"></hr></h2>
        </div>
      </div>
    </div>
  )
}
// sinon on les affiche dans la liste
  return(
    <div className="container-data">
      <h1>Memorial Admin dashboard</h1>
       <p className="underline">Bienvenue</p>
      <div className="first-container">
          <h2 className="title">Soldat du jour<hr width="50"></hr></h2>
          <table className="soldier-table">
              <thead className="soldier-thead">
                        <tr>
                          <th><p>id</p></th>
                          <th><p>Image</p></th>
                          <th><p>Grade</p></th>
                          <th><p>Prénom</p></th>
                          <th><p>Nom</p></th>
                          {/* <th><p>Conflit</p></th> */}
                          {/* <th><p>Unitée</p></th> */}
                          <th><p>Date</p></th>
                          {/* <th><p>Action</p></th> */}
                          {/* <th><p>Date de décès</p></th> */}
                          {/* <th><p>Age</p></th> */}
                          {/* <th><p>Armée</p></th> */}                
                          {/* <th><p>Lieu de sépulture</p></th> */}
                          {/* <th><p>Biographie</p></th> */}
                          {/* <th><p>Circonstance du décès</p></th> */}
                          
                        </tr>
              </thead>
              <tbody>
              {
              soldiers.map((soldier) =>
                <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
                  
                      <td ><p className="title">{soldier.id}</p></td>
                      <td><img className="soldier-img" src={soldier.image}></img></td>
                      <td><p className="title">{soldier.grade}</p></td>
                      <td><p className="title">{soldier.prenom}</p></td>
                      <td><p className="title">{soldier.nom}</p></td>
                      <td><p className="title">{soldier.deces}</p></td>
                      
                      {/* <td><p className="title">{soldier.age}</p></td> */}
                      {/* <td><p className="title">{soldier.theatre}</p></td> */}
                      {/* <td><p className="title">{soldier.armee}</p></td> */}
                      {/* <td><p className="title">{soldier.unitee}</p></td> */}

                      {/* <td><p className="title">{soldier.sepulture}</p></td> */}
                      {/* <td><p className="title">{soldier.biographie}</p></td> */}
                      {/* <td><p className="title">{soldier.circonstance}</p></td> */}
                      {/* <td><button className='btn-yellow' onClick={linkToUpdate}>Voir</button></td> */}
                </tr> 
                )
              }
              </tbody>
          </table>
      </div>
      <div className="display_row">
        <div className="first-container">
          <h2 className="title">Date du jour<hr width="50"></hr></h2>
          <p style={{fontSize:20}}>{currentDay} {currentMonth} {currentYear}</p>
        </div>
        <div className="first-container">
          <h2 className="title">Ajouter un soldat<hr width="50"></hr></h2>
          <button className="btn-green"><Link className="link" to="/add">Ajouter un soldat</Link></button>
        </div>
        <div className="first-container">
          <h2 className="title">Nombre de Données<hr width="50"></hr></h2>
        </div>
      </div>
    </div>
    )



    
}
export default HomePage
