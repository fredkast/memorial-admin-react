import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


function LandingPage(){
  let navigate = useNavigate()
  function linkToUpdate(){
    navigate("/update",{ replace: true });
  }
  
  const [soldiers, setAllSoldiers] = useState([])
  const [isLoaded, setIsLoaded] = useState([])

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

  console.log(soldiers)

// si il n'y a pas de soldat mort aujourd'hui
if (!soldiers.length){
  return(
    <div className="container-data">
      <div className='list-container'>
        <h1 className="title">Soldat du jour</h1>
        <p>Aucun soldat n'est mort le {Date()}</p>
      </div>
    </div>
  )
}
// sinon on les affiche dans la liste
  return(
    <div className="container-data">
      <h1>Bienvenue</h1>
      <div className="form-container">
      <div className='list-container'>
          <h2 className="title">Soldat du jour</h2>
          <table className="soldier-table">
              <thead className="soldier-thead">
                        <tr>
                          <th><p>id</p></th>
                          <th><p>Image</p></th>
                          <th><p>Grade</p></th>
                          <th><p>Prénom</p></th>
                          <th><p>Nom</p></th>
                          <th><p>Conflit</p></th>
                          <th><p>Unitée</p></th>
                          <th><p>Unitée</p></th>
                          <th><p>Action</p></th>
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
                  
                      <td><p className="title">{soldier.id}</p></td>
                      <td><img className="soldier-img" src={soldier.image}></img></td>
                      <td><p className="title">{soldier.grade}</p></td>
                      <td><p className="title">{soldier.prenom}</p></td>
                      <td><p className="title">{soldier.nom}</p></td>
                      
                      {/* <td><p className="title">{soldier.deces}</p></td> */}
                      {/* <td><p className="title">{soldier.age}</p></td> */}
                      <td><p className="title">{soldier.theatre}</p></td>
                      {/* <td><p className="title">{soldier.armee}</p></td> */}
                      <td><p className="title">{soldier.unitee}</p></td>
                      {/* <td><p className="title">{soldier.sepulture}</p></td> */}
                      {/* <td><p className="title">{soldier.biographie}</p></td> */}
                      {/* <td><p className="title">{soldier.circonstance}</p></td> */}
                      <td><button className='btn-yellow' onClick={linkToUpdate}>Modifier </button></td>
                </tr> 
                )
              }
              </tbody>
          </table>
        </div>
      </div>
    </div>
    )



    
}
export default LandingPage
