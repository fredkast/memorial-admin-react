//  Component Conflicts List 

// import '../../Styles/listconflict.css'
import React,{ useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"


// TODO 

// "voulez vous vraiment supp ?" plutot que alert ligne 35

function ListConflicts(){

  // const [idToSend, setIdToSend] = useState({}); 
  const [conflicts, setAllConflicts] = useState([]);
  // redirection
  let navigate = useNavigate()


  

  function linkToUpdate(id){
    // envois de l'id en props vers le component Update
    navigate('/modifier-conflit',{state:{id:id}});
    console.log(id)
  }

  function idToDelete(id){
    var result = window.confirm("Êtes-vous sûr de vouloir supprimer de la base de donnée l'identifiant "+id);
    if (result) {
      fetch('https://api.tytnature.fr/conflits/delete.php', {
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
    fetch(`https://api.tytnature.fr/conflits/readAll.php`)
        .then((response) => response.json()
        .then((data) =>{
          console.log(data)
          setAllConflicts(data);
        })
        .catch((error) => console.log(error))
        )
      },
  [])

  return(
          
    <div className="container-data">
      <div className='list-container'>
        <h1 className="title">Tous les conflits</h1>
           <p className="underline">Toutes les données de la base de donnée</p>
       
        <table className="table">
            <thead className="thead">
                      <tr>
                        <th><p style={{fontSize:12, color:'gray'}}>id</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Lieux</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Dates</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Descriptions</p></th>
                        <th><p style={{fontSize:12, color:'gray'}}>Actions</p></th>

                      </tr>
            </thead>
            <tbody>
            {
            conflicts.map((conflict) =>
              <tr className={"card"} id={"conflict-"+conflict.id} key={conflict.id}>
            
                    <td><p style={{margin:10}}>{conflict.id}</p></td>
                    <td><p style={{margin:10}}>{conflict.lieu} </p></td>
                    <td><p style={{margin:10}}>{conflict.date}</p></td>       
                    <td><p style={{margin:10}}>{conflict.description}</p></td>
                  
                    <td>
                      <div className="display-row">
                        <img className="icon" src={"img/update.png"} onClick={(e) => linkToUpdate(conflict.id)}></img>
                        <img className="icon" src={"img/delete.png"} onClick={(e) => idToDelete(conflict.id)}></img>
                      </div>
                    </td>
              </tr> 
              )
            }
            </tbody>
        </table>
        <Link to="/add">
          <button style={{margin:40}} className='btn-green'>Ajouter un conflit</button>
        </Link>
      </div>
    </div>

  );
}
export default ListConflicts
