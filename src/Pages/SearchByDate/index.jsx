import '../../Styles/listSoldier.css'

import React,{ useEffect, useState } from "react";

function SearchByCurrentDate(){
   
const [soldiersFind, setSoldiersToFind] = useState([])


function askApi(e){
  // empecher de re render le component au click
 e.preventDefault();
 fetch('https://api.tytnature.fr/soldats/readOnDate.php', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(
       {
        "userDate":"2022-02-02"
      }
     )
   })
   .then((response) => response.json()
   .then((data) =>{
    setSoldiersToFind(data);
   })
   .catch((error) => console.log(error))
   )}


if (!soldiersFind.length){
  return(
    <div className="container-data">
      <h1 className="title">Chercher un soldat</h1>
        <div className='form-container'>
          <input className='search-input'></input>
          <input className="btn-green" type="submit" value="Envoyer" onClick={askApi}></input>
        </div>
    </div>
  )
}
 return(
     
  
  <div className="container-data">
  <h1 className="title">Chercher un soldat</h1>
  <div className='form-container'>
    <input className='search-input'></input>
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
           
              <td><p className="title">{soldier.id}</p></td>
              <td><img className="soldier-img" src={soldier.image}></img></td>
              <td><p className="title">{soldier.grade}</p></td>
              <td><p className="title">{soldier.prenom}</p></td>
              <td><p className="title">{soldier.nom}</p></td>
              
              <td><p className="title">{soldier.deces}</p></td>
              <td><p className="title">{soldier.age}</p></td>
              <td><p className="title">{soldier.theatre}</p></td>
              <td><p className="title">{soldier.armee}</p></td>
              <td><p className="title">{soldier.unitee}</p></td>
              <td><p className="title">{soldier.sepulture}</p></td>
              <td><p className="title">{soldier.biographie}</p></td>
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
export default SearchByCurrentDate
