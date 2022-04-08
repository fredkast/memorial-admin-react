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
          <h2 className="title">Soldats du jour<hr width="50"></hr></h2>
          <table className="soldier-table">
              <tbody>
              {
              soldiers.map((soldier) =>
                <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
                      <td className="soldier-img-container"><div className="ribbon ribbon-top-left"><span>RIP</span></div><img className="soldier-img_small"  src={soldier.image}></img></td>
                      <td><p className="title">{soldier.grade} {soldier.nom} {soldier.prenom} <br></br>Mort le : <br></br>{soldier.deces}</p></td>                      
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
