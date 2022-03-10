// Component SearchByDate

import React,{ useState } from "react";

function SearchByCurrentDate(){

// La liste des soldats qui seront trouvés
const [soldiersFind, setSoldiersToFind] = useState([])
// la date de la recherche
const [textToFind, setTextToFind] = useState([])
const bodyRequest = 
  {
    "userDate":textToFind
 }

function askApi(e){
  // empecher de re render le component au click
  e.preventDefault();
  console.log(bodyRequest)
  fetch('https://api.tytnature.fr/soldats/readOnDate', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(bodyRequest),
   })
   .then((response) => response.json()
   .then((data) =>{
    setSoldiersToFind(data);
   })
   .catch((error) => console.log(error))
   )}

// Si il n'y a pas de soldat dans le state
if (!soldiersFind.length){
  return(
    <div className="container-data">
    <h1 className="title">Chercher les soldats morts à une date précise</h1>
      <p className="italic">Exemple : 2022-02-02</p>
        <div className='first-container'>
          <input className='search-input' onChange={(e) => setTextToFind(e.target.value)}></input>
          
          <input className="btn-green" type="submit" value="Envoyer" onClick={askApi}></input>
        </div>
    </div>
  )
}
// sinon on affiche le résultat
 return(
  <div className="container-data">
    <h1 className="title">Résultas</h1>
    <div className='first-container'>
      <input className='search-input' onChange={(e) => setTextToFind(e.target.value)}></input>
      <input className="btn-green" type="submit" value="Envoyer" onClick={askApi}></input>
    </div>
    <div className='list-container'>
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
                    <th><p>Armée</p></th>
                    <th><p>Unitée</p></th>
                    <th><p>Lieu de sépulture</p></th>
                    <th><p>Biographie</p></th>
                    <th><p>Circonstance du décès</p></th>
                  </tr>
        </thead>
        <tbody>
        {
        soldiersFind.map((soldier) =>
          <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
            
                <td><p style={{margin:10}}>{soldier.id}</p></td>
                <td><img className="soldier-img" src={soldier.image}></img></td>
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
            
          </tr> 
          )
        }
        </tbody>
        
    </table>
    </div>
  </div>

);
}
export default SearchByCurrentDate
