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
    var result = window.confirm("Êtes-vous sûr de vouloir supprimer de la base de donnée l'identifiant "+id);
    if (result) {
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
      )
    }
  }


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
        <h1 className="title">Nos soldats morts pour la France</h1>
           <p className="underline">Toutes les données de la base de donnée</p>
        <div className="display-row">
          <p style={{color:"olive", margin:5}}>Armée de Terre</p>
          <p style={{color:"deepskyblue",margin:5}}>Armée de l'air</p>
          <p style={{color:"#1e1ee1",margin:5}}>Marine Nationale</p>
          <p style={{color:"lightskyblue",margin:5}}>Gendarmerie</p>
          <p style={{color:"slategray",margin:5}}>Autres</p>
        </div>
        <table className="soldier-table">
            <thead className="soldier-thead">
                      <tr>
                        <th><p>N°</p></th>
                        <th></th>
                        <th><p>Genre</p></th>
                        <th><p>Grade</p></th>
                        <th><p>Prénom</p></th>
                        <th><p>Nom</p></th>
                        <th><p>Date de décès</p></th>
                        <th><p>Age</p></th>
                        <th><p>Conflit</p></th>
                        {/* <th><p>Armée</p></th> */}
                        <th><p>Unitée</p></th>
                        {/* <th><p>Lieu de sépulture</p></th>
                        <th><p>Biographie</p></th>
                        <th><p>Circonstance du décès</p></th> */}
                        <th><p>Action</p></th>
                      </tr>
            </thead>
            <tbody>
            {
            soldiers.map((soldier) =>
              <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
                
                    <td className={"armeeColor-"+soldier.armee}><p style={{margin:10}}  >{soldier.id}</p></td>
                    <td><img className="soldier-img" style={{maxWidth:50}} src={soldier.image}></img></td>
                    <td className={"soldier-gender-"+soldier.genre}><p style={{margin:10}}>{soldier.genre}</p></td>
                    <td><p style={{margin:10}}>{soldier.grade}</p></td>
                    <td><p style={{margin:10}}>{soldier.prenom}</p></td>
                    <td><p style={{margin:10}}>{soldier.nom}</p></td>
                    
                    <td><p style={{margin:10}}>{soldier.deces}</p></td>
                    <td><p style={{margin:10}}>{soldier.age}</p></td>
                    <td><p style={{margin:10}}>{soldier.theatre}</p></td>
                    {/* <td><p style={{margin:10}}>{soldier.armee}</p></td> */}
                    <td><p style={{margin:10}}>{soldier.unitee}</p></td>
                    {/* <td><p style={{margin:10}}>{soldier.sepulture}</p></td>
                    <td><p style={{margin:10}}>{soldier.biographie}</p></td>
                    <td><p style={{margin:10}}>{soldier.circonstance}</p></td> */}
                    <td>
                      <div className="display-row">
                        <img className="icon" src={"img/update.png"} onClick={(e) => linkToUpdate(soldier.id)}></img>
                        <img className="icon" src={"img/delete.png"} onClick={(e) => idToDelete(soldier.id)}></img>
                      </div>
                    </td>
              </tr> 
              )
            }
            </tbody>
        </table>


        {/* A DEVELOPPEER */}
        <Link to="/add">
          <button className='btn-blue'>Ajouter un soldat</button>
        </Link>
      </div>
    </div>

  );
}
export default ListSoldiers
