import '../../Styles/listSoldier.css'
import React,{ useEffect, useState } from "react";


function ListSoldiers(){
   
const [soldiers, setAllSoldiers] = useState([])



useEffect(() => {
  fetch(`https://api.tytnature.fr/soldats/readAll.php`)
      .then((response) => response.json()
      .then((data) =>{
        setAllSoldiers(data);
      })
      .catch((error) => console.log(error))
      )},
[])

console.log(soldiers)

 return(
        
  <div className="container-data">
    <div className='list-container'>
      <h1 className="title">Liste des soldats</h1>
      <table className="soldier-table">
          <thead className="soldier-thead">
                    <tr>
                      <th><p>id</p></th>
                      <th><p>Image</p></th>
                      <th><p>Grade</p></th>
                      <th><p>Prénom</p></th>
                      <th><p>Nom</p></th>
                      
                      <th><p>Date de décès</p></th>
                      <th><p>Age</p></th>
                      <th><p>Conflit</p></th>
                      {/* <th><p>Armée</p></th> */}
                      <th><p>Unitée</p></th>
                      {/* <th><p>Lieu de sépulture</p></th> */}
                      {/* <th><p>Biographie</p></th> */}
                      <th><p>Circonstance du décès</p></th>
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
                  
                  <td><p className="title">{soldier.deces}</p></td>
                  <td><p className="title">{soldier.age}</p></td>
                  <td><p className="title">{soldier.theatre}</p></td>
                  {/* <td><p className="title">{soldier.armee}</p></td> */}
                  <td><p className="title">{soldier.unitee}</p></td>
                  {/* <td><p className="title">{soldier.sepulture}</p></td> */}
                  {/* <td><p className="title">{soldier.biographie}</p></td> */}
                  <td><p className="title">{soldier.circonstance}</p></td>
              
            </tr> 
            )
          }
          </tbody>
      </table>
    </div>
  </div>

);
}
export default ListSoldiers
