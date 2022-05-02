//  Component Conflicts List 

// import '../../Styles/listconflict.css'
import React,{ useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"


// TODO 

// "voulez vous vraiment supp ?" plutot que alert ligne 35

function ListUnits(){

  // const [idToSend, setIdToSend] = useState({}); 
  const [unity, setAllUnit] = useState([]);
  // redirection
  let navigate = useNavigate()


  

  function linkToUpdate(id){
    // envois de l'id en props vers le component Update
    navigate('/modifier-unitee',{state:{id:id}});
    console.log("ID send: "+id)
  }

  function idToDelete(id){
    var result = window.confirm("Êtes-vous sûr de vouloir supprimer de la base de donnée l'identifiant "+id);
    if (result) {
      fetch('https://api.tytnature.fr/unitees/delete.php', {
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
    fetch(`https://api.tytnature.fr/unitees/readAll.php`)
        .then((response) => response.json()
        .then((data) =>{
          console.log(data)
          setAllUnit(data);
        })
        .catch((error) => console.log(error))
        )
      },
  [])

  return(
          
    <div className="container-data">
      <div className='list-container'>
        <h1 className="title">Toutes les unitée</h1>
           <p className="underline">Toutes les données de la base de donnée</p>
       
        <table className="table">
            <thead className="thead">
                      <tr>
                        <th><p style={{fontSize:12, color:'gray'}}>id</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Lieux</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Nom</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Descriptions</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Actions</p></th>
                      </tr>
            </thead>
            <tbody>
            {
            unity.map((unity) =>
              <tr className={"card"} id={"unity-"+unity.id} key={unity.id}>
            
                    <td><p style={{margin:10}}>{unity.id}</p></td>
                    <td><p style={{margin:10}}>{unity.lieu} </p></td>
                    <td><p style={{margin:10}}>{unity.nom}</p></td>       
                    <td><p style={{margin:10}}>{unity.description}</p></td>
                  
                    <td>
                      <div className="display-row">
                        <img className="icon" src={"img/update.png"} onClick={(e) => linkToUpdate(unity.id)}></img>
                        <img className="icon" src={"img/delete.png"} onClick={(e) => idToDelete(unity.id)}></img>
                      </div>
                    </td>
              </tr> 
              )
            }
            </tbody>
        </table>
        <Link to="/add">
          <button style={{margin:40}} className='btn-green'>Ajouter une unitée</button>
        </Link>
      </div>
    </div>

  );
}
export default ListUnits
