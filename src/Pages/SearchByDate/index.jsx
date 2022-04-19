// Component SearchByDate

import React,{ useState } from "react";

function SearchByCurrentDate(){

// La liste des soldats qui seront trouvés
const [soldiersFind, setSoldiersToFind] = useState([])
// la date de la recherche
const [dateToFind, setTextToFind] = useState([])

const bodyRequest = 
  {
    "userDate":dateToFind
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
    <h1 className="title">Chercher par date</h1>
    <p className="underline">Chercher les soldats morts à une date précise</p>
      <p className="italic">Exemple : 2022-02-02</p>
        <div className='first-container'>
          <input type="date"  className='search-input' onChange={(e) => setTextToFind(e.target.value)}></input>
          <input className="btn-green" type="submit" value="Envoyer" onClick={askApi}></input>
          <p style={{color:"red"}}>Il n'y a pas de soldat mort à cette date.</p>
        </div>
    </div>
  )
}
// sinon on affiche le résultat
 return(
  <div className="container-data">
    <h1 className="title">Résultas</h1>
    <div className='first-container'>
      <input type="date" className='search-input' onChange={(e) => setTextToFind(e.target.value)}></input>
      <input className="btn-green" type="submit" value="Envoyer" onClick={askApi}></input>
    </div>
    <div className='list-container'>
    <table className="soldier-table">
       
        <tbody>
        {
        soldiersFind.map((soldier) =>
          <tr className={"soldier-card"} id={"soldier-"+soldier.id} key={soldier.id}>
            
                <td><p style={{margin:10}}>{soldier.id}</p></td>
                <td><img className="soldier-img" src={soldier.image}></img></td>
                <td><p style={{margin:10}}>{soldier.grade} {soldier.nom} {soldier.prenom}.</p></td>
                <td><p style={{margin:10}}> Mort pour la France le {soldier.deces}<br></br>à l'age de {soldier.age}ans, en operation à/au {soldier.theatre}.</p></td>
  
                <td><p style={{margin:10}}>Appartenant à l' {soldier.armee}, au sein de/du {soldier.unitee}</p></td>
             
            
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
