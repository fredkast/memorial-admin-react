// Composent HomePage

// TODO : Widget avec le nombre de données dans la BDD

import React,{ useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import "../../Styles/style.css";


function HomePage(){
  let navigate = useNavigate()
  function linkToUpdate(){
    navigate("/update",{ replace: true });
  }
  
  const [Soldiers, setTodaySoldiers] = useState([])
  const [SoldiersNumber, setAllSoldiers] = useState([])
  const [UnitNumber, setAllUnits] = useState([])
  const [ConflictNumber, setAllConflicts] = useState([])


  const [isLoaded, setIsLoaded] = useState([])

  // affichage de la date actuelle
  const d = new Date();
  const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  let currentMonth = month[d.getMonth()];
  const currentDay = d.getDate()
  const currentYear = d.getFullYear();

  useEffect(() => {
    fetch(`https://api.projet-memorial.fr/soldats/readOfDay.php`)
        .then((response) => response.json()
        .then((data) =>{
          setTodaySoldiers(data);
        })
        .catch((error) => 
          console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)),
        )
    fetch('https://api.projet-memorial.fr/soldats/readAll.php')
        .then((response)=> response.json()
        .then((data)=>{
          setAllSoldiers(data.length);
          console.log(data.length)
        })
        .catch((error)=>
          console.log("erreur" + error)
        ))
    fetch('https://api.projet-memorial.fr/unitees/readAll.php')
        .then((response)=> response.json()
        .then((data)=>{
          setAllUnits(data.length);
          console.log(data.length)
        })
        .catch((error)=>
          console.log("erreur" + error)
        ))
    fetch('https://api.projet-memorial.fr/conflits/readAll.php')
        .then((response)=> response.json()
        .then((data)=>{
          setAllConflicts(data.length);
          console.log(data.length)
        })
        .catch((error)=>
          console.log("erreur" + error)
        ))
      },
        
  [])


// si il n'y a pas de soldat mort aujourd'hui
if (!Soldiers.length){
  return(
    <div className="main-container">
       <h1>Tableau de bord &#9881;</h1>
       <p className="underline">Bienvenue</p>

      <div className='first-container'>
        <h2 className="title">Soldat du jour &#10013;<hr width="50"></hr></h2>
        <p>Aucun soldat n'est mort un {currentDay + " " + currentMonth +"."}</p>
      </div>
      <div style={{textAlign:"left",width:"80%", maxWidth:1200}}>
        <h3>Actualités</h3>
      </div>
      <div className="second-container" style={{width:'80%'}}>
        <div className="first-container-red">
          <h2 className="title">Date du jour<hr width="50"></hr></h2>
          <p style={{fontSize:35, color:'white',textAlign:"center"}}>{currentDay} {currentMonth} {currentYear}</p>
        </div>
        <div className="first-container-green">
          <h2 className="title">Ajouter un soldat<hr width="50"></hr></h2>
          <button className="btn-transparent"><Link className="link" to="/ajouter">Ajouter un soldat</Link></button>
        </div>
        <div className="first-container-orange">
          <h2 className="title">Nombre de Données<hr width="50"></hr></h2>
          <p style={{color:'white',textAlign:"center", fontSize:20, margin:0}}>{SoldiersNumber} soldats &#10013;</p>
          <p style={{color:'white',textAlign:"center", fontSize:20, margin:0}}>{UnitNumber} unitées &#9876;</p>
          <p style={{color:'white',textAlign:"center", fontSize:20, margin:0}}>{ConflictNumber} conflits &#10041;</p>

        </div>
      </div>
    </div>
  )
}
// Si il y a des soldats mort en ce jour on les affiche dans la liste
  return(
    <div className="main-container">
      <h1>Tableau de bord &#9881;</h1>
       <p className="underline">Bienvenue</p>
      <div className="first-container">
          <h2 className="title">Soldats du jour &#10013;<hr width="50"></hr></h2>
          <table className="soldier-table">
            <h3>Aujourd'hui nous honorons:</h3>
              <tbody>
              {
              Soldiers.map((soldier) =>
                <div>
                  <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
                        <td className="soldier-img-container"  style={{ backgroundImage: `url(${soldier.image})` }} >
                          
                        </td>
                        <td><p className="title" style={{color:"white"}}>{soldier.grade} {soldier.nom} {soldier.prenom} <br></br>{soldier.circonstance}<br></br>le {soldier.deces}. </p></td>
                  </tr> 
                  <hr width="50"></hr>
                </div>
                )
              }
              </tbody>
          </table>
      </div>
      <div className="display_row" style={{width:'80%'}}>
        <div className="first-container-red">
          <h2 className="title">Date du jour<hr width="50"></hr></h2>
          <p style={{fontSize:20,color:"black"}}>{currentDay} {currentMonth} {currentYear}</p>
        </div>
        <div className="first-container-orange">
          <h2 className="title">Ajouter un soldat<hr width="50"></hr></h2>
          <button className="btn-transparent"><Link className="link" to="/ajouter">Ajouter un soldat</Link></button>
        </div>
        <div className="first-container-green">
          <h2 className="title">Nombre de Données<hr width="50"></hr></h2>
          <p style={{color:'white',textAlign:"center", fontSize:20, margin:0}}>{SoldiersNumber} soldats &#10013;</p>
          <p style={{color:'white',textAlign:"center", fontSize:20, margin:0}}>{UnitNumber} unitées  &#9876;</p>
          <p style={{color:'white',textAlign:"center", fontSize:20, margin:0}}>{ConflictNumber} conflits &#10041;</p>
        </div>
      </div>
    </div>
    )



    
}
export default HomePage
