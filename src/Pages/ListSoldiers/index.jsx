//  Component Soldiers List 

// import '../../Styles/listSoldier.css'
import React,{ useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"


// TODO 

// "voulez vous vraiment supp ?" plutot que alert ligne 35

function ListSoldiers(){

  // const [idToSend, setIdToSend] = useState({}); 
  const [soldiers, setAllSoldiers] = useState([]);
  // redirection
  let navigate = useNavigate()


  function linkToUpdate(id){
    // envois de l'id en props vers le component Update
    navigate('/update',{state:{id:id}});
    console.log(id)
  }

  function idToDelete(id){
    fetch('https://api.tytnature.fr/soldats/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "id":id
        }
      ),
    })
    .then((response) => response.json()
    .then((data) =>{
      console.log(data);
      if(data.message === "success"){
       alert("Données supprimées !")
       window.location.reload(false);
      }
    })
    .catch((error) =>{ console.log(error)
        alert("Echec de la suppression !")
      })
    )}


  useEffect(() => {
    fetch(`https://api.tytnature.fr/soldats/readAll.php`)
        .then((response) => response.json()
        .then((data) =>{
          console.log(data)
          setAllSoldiers(data);
        })
        .catch((error) => console.log(error))
        )
      },
  [])

  return(
          
    <div className="container-data">
      <div className='list-container'>
        <h1 className="title">Liste des soldats dans la base de donnée</h1>
        <table className="soldier-table">
            <thead className="soldier-thead">
                      <tr>
                        <th><p>N°</p></th>
                        <th><p>Image</p></th>
                        <th><p>Grade</p></th>
                        <th><p>Prénom</p></th>
                        <th><p>Nom</p></th>
                        <th><p>Date de décès</p></th>
                        <th><p>Age</p></th>
                        <th><p>Conflit</p></th>
                        <th><p>Armée</p></th>
                        <th><p>Unitée</p></th>
                        <th><p>Lieu de sépulture</p></th>
                        <th><p>Biographie</p></th>
                        <th><p>Circonstance du décès</p></th>
                        <th><p>Action</p></th>
                      </tr>
            </thead>
            <tbody>
            {
            soldiers.map((soldier) =>
              <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
                
                    <td><p style={{margin:10}} >{soldier.id}</p></td>
                    <td><img className="soldier-img" style={{maxWidth:50}} src={soldier.image}></img></td>
                    <td><p style={{margin:10}}>{soldier.grade}</p></td>
                    <td><p style={{margin:10}}>{soldier.prenom}</p></td>
                    <td><p style={{margin:10}}>{soldier.nom}</p></td>
                    
                    <td><p style={{margin:10}}>{soldier.deces}</p></td>
                    <td><p style={{margin:10}}>{soldier.age}</p></td>
                    <td><p style={{margin:10}}>{soldier.theatre}</p></td>
                    <td><p style={{margin:10}}>{soldier.armee}</p></td>
                    <td><p style={{margin:10}}>{soldier.unitee}</p></td>
                    <td><p style={{margin:10}}>{soldier.sepulture}</p></td>
                    <td><p style={{margin:10}}>{soldier.biographie}</p></td>
                    <td><p style={{margin:10}}>{soldier.circonstance}</p></td>
                    <td>
                      <button className='color-green' onClick={(e) => linkToUpdate(soldier.id)} >Modifier </button>
                      <button className='color-red'   onClick={(e) => idToDelete(soldier.id)}>Supprimer </button>
                    </td>
              </tr> 
              )
            }
            </tbody>
        </table>


        {/* A DEVELOPPEER */}
        <Link to="/add">
          <button className='btn-green'>Ajouter un soldat</button>
        </Link>
      </div>
    </div>

  );
}
export default ListSoldiers
