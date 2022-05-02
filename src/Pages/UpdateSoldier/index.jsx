// Component Update Soldier

import React,{  useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';


function UpdateSoldier(){

  // const [soldiersFind, setSoldiersToFind] = useState([{}])

  const {state} = useLocation();

    // on creer un state des champs qui seront hydraté avec les nouvelles donneées des input
  const [Id, setId] = useState([])
  const [Name, setName] = useState([])
  const [Firstname, setFirstname] = useState([])
  const [Grade, setGrade] = useState([])
  const [Age, setAge] = useState([])
  const [Date, setDate] = useState([])
  const [Army, setArmy] = useState([])
  const [Unit, setUnit] = useState([])
  const [Conflit, setConflit] = useState([])
  const [Bio, setBio] = useState([])
  const [Circ, setCirc] = useState([])
  const [Sepult, setSepult] = useState([])
  const [Gender, setGender] = useState([])
  const [Image, setImage] = useState([])
  const [EncodedImage, setEncodedImage] = useState([])


  // All Units state

  const [allUnits, setAllUnits] = useState([]);
  const [allConflicts, setAllConflicts] = useState([]);

  // ---------------------------------***** ETAPE 1 : afficher les données du conflit (id passé par conflitList) depuis l'api
  const bodyRequest = 
  {
    "id":state.id
  }
  // GET soldiers's data request
  useEffect(() => {
    fetch('https://api.tytnature.fr/soldats/read.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // le text format JSON
      body: JSON.stringify(bodyRequest),
    })
    .then((response) => response.json()
    .then((data) =>{
      setId(data.id)
      setName(data.nom);
      setFirstname(data.prenom)
      setGrade(data.grade)
      setAge(data.age)
      setDate(data.date_deces)
      setArmy(data.armee)
      setUnit(data.unitee)
      setConflit(data.conflit)
      setBio(data.biographie)
      setCirc(data.circonstance)
      setSepult(data.sepulture)
      setGender(data.gender)
      setImage(data.image)
    },
    // Get ALL UNITS DATAS
      fetch('https://api.tytnature.fr/unitees/readAll.php',{
        method: 'GET',
      })
      .then((response) => response.json()
      .then((d) =>{
        
        setAllUnits(d)
        // Get ALL CONFLICTS DATAS
        fetch('https://api.tytnature.fr/conflits/readAll.php',{
          method: 'GET',
        })
        .then((response) => response.json()
        .then((b) =>{
          setAllConflicts(b)
          }
        )
        .catch(
          (error) => {
            // UPLOAD FAIL
            alert("Echec sauvegarde de l'image ! Une erreur est survenue.")
          })
        )
      })
      )
    )
    .catch(() => {
      console.log("Fail API request")
      alert("Erreur dans la reécupération de données !")
      })
    )},
  [])
  //--------------------------------------------------------**** ETAPE 2 methode UPDATE modification du soldat trouvé
  const bodyRequestForUpload = JSON.stringify(
        {
          "file":Image,
          "fileName": Id,
        }
      )


  const bodyRequestForUpdate = 
  // UPDATE request's body
    {
      "id": Id,
      "nom": Name,
      "prenom": Firstname,
      "grade": Grade,
      "age": Age,
      "deces": Date,
      "armee": Army,
      "unitee": Unit,
      "theatre": Conflit,
      "biographie": Bio,
      "circonstance": Circ,
      "sepulture": Sepult,
      "gender": Gender,
      "image": 'https://api.tytnature.fr/img/soldiers/'+Id+'.jpg',
    }
  console.log(bodyRequestForUpdate)

// #1 upload image to server
 
  function updateAPI(e){
    e.preventDefault();

    // Si l'image est modifier alors on UPLOAD + UPDATE
    if(EncodedImage.length !== 0){
      console.log("IMAGE", 'PRESENTE')
      fetch(
        'https://api.tytnature.fr/soldats/update.php',
          {
            method: 'POST',
            body: JSON.stringify(bodyRequestForUpdate)
          }
        )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.message) 
          if(result.message === "Udapte succesful"){
                console.log('UPDATE',"Données sauvegardées !")

                fetch('https://api.tytnature.fr/soldats/upload.php', 
                {
                  method: 'POST',
                  body: bodyRequestForUpload
                })
                .then((response) => response.json()
                .then((data) =>{
                  // GLOBAL UPDATE SUCCESS
                  console.log(data.result)
                  console.log("UPLOAD","Image sauvegardée !")
                  alert("Données modifiées !")
                  window.location.reload(false);
                })
                .catch(
                  (error) => {
                    // UPLOAD FAIL
                    alert("Echec sauvegarde de l'image ! Une erreur est survenue.")
                  })
                )
                // GLOBAL UPDATE FAIL
            }else{
                alert("Erreur: veuillez remplir les champs obligatoires!")
            }            
        })

    }else{
      console.log("IMAGE", "Pas d'image")
      // Si l'image n'est pas a modifier alors on update suelement les champs remplis
      fetch(
        'https://api.tytnature.fr/soldats/update.php',
          {
            method: 'POST',
            body: JSON.stringify(bodyRequestForUpdate)
          }
        )
        .then((response) => response.json())
        .then((result) => {
          console.log(result.message) 
          alert("Données modifiées !")
          window.location.reload(false);
        })
        .catch(
          (error) => {
            // UPLOAD FAIL
            alert("Attention, vous n'avez modifié aucun champs.")
          })
    }
    
  };
  // Encode IMAGE
  const imagePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setEncodedImage(URL.createObjectURL( e.target.files[0]));
      var file =  e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        setEncodedImage(reader.result);
        setImage(reader.result)
      }
    }
  };

  return(     
        <div className="container-data">
          <h1 className="title">Modifier le soldat n°{state.id}</h1>
          <p className="underline">Modifier les champs </p>

          {/* FORMS */}

          <div className='first-container'>
                <form className="form" >

                  <div className="textarea-container">
                        <label htmlFor="input_text">Image:</label>
                        <img style={{color:'green', margin:20}} className="soldier-img" src={Image} alt={Name + Firstname}/>
                  </div>
                    <p style={{fontStyle:'italic'}}>Taille conseillée : 500x500px, format JPG,JEP,PNG</p>
                    
                  {/* PHOTO */}
                  <div className="display_row">
                        <label htmlFor="input_text">Photo du soldat: </label>
                        <input id="add_img_soldier" type="file" onChange={imagePreview}/>
                  </div>
                  
                  <div className="display_row">
                      <div className="input_field">
                        <label htmlFor="input_text">Nom : </label>
                        <input id="name" type="text"  value={Name} onChange={e => setName(e.target.value.trim())} />
                      </div>
                      <div className="input_field">
                        <label htmlFor="input_text">Prénom : </label>
                        <input id="prenom" type="text"  value={Firstname} onChange={(e) => setFirstname(e.target.value.trim())} />
                      </div>
                  </div>

                  <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Age :</label>
                      <input id="age" type="number"  value={Age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="input_field">
                      <label htmlFor="input_text">Date déces : </label>
                      <input id="deces" type="date" data-length="4" value={Date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                  </div>

                  {/* <REQUIRED></REQUIRED> */}

                  <div className="display_row">
                    <label style={{color:'red'}} >Genre* : </label>
                    <div className="display_row">
                      <label  for="female" >Femme :</label>
                        <input type="radio" name="gender" id="FEMALE" value="FEMALE" onChange={(e) => setGender(e.target.value)}/>
                      <label for="female" >Homme :</label>
                        <input type="radio" name="gender" id="MALE" value="MALE" onChange={(e) => setGender(e.target.value)}/>
                    </div>
                  </div>

                  <div className="display_row">
                    <div className="input_field">
                        <label htmlFor="input_text">Grade : </label>
                        <select name="grade" id="grade" onChange={(e) => setGrade(e.target.value)}>
                          <option value={Grade} disabled selected>{Grade}</option>
                          <option value="Soldat de 2eme classe">Soldat de 2eme classe</option>
                          <option value="Soldat de 1ere classe">Soldat de 1ere classe</option>
                          <option value="Caporal">Caporal</option>
                          <option value="Caporal-chef">Caporal-chef</option>
                          <option value="Caporal-chef de 1ere classe">Caporal-chef de 1ere classe</option>
                          <option value="Sergent">Sergent</option>
                          <option value="Sergent-Chef">Sergent-Chef</option>
                          <option value="Adjudant">Adjudant</option>
                          <option value="Adjudant-Chef">Adjudant-Chef</option>
                          <option value="Major">Major</option>
                          <option value="Sous-Lieutenant">Sous-Lieutenant</option>
                          <option value="Lieutenant">Lieutenant</option>
                          <option value="Capitaine">Capitaine</option>
                          <option value="Commandant">Commandant</option>
                          <option value="Lieutenant-Colonel">Lieutenant-Colonel</option>
                          <option value="Colonel">Colonel</option>
                          <option value="Géneral de Brigade">Géneral de Brigade</option>
                          <option value="Géneral de Division">Géneral de Division</option>
                          <option value="Géneral de Corps d'Armée">Géneral de Corps d'Armée</option>
                          <option value="Géneral de d'Armée">Géneral de d'Armée</option>
                        </select>
                      </div>
                  </div>
                  <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Armée :</label>
                      <select name="armee" id="armee" onChange={(e) => setArmy(e.target.value)} >
                          <option value={Army} disabled selected>{Army}</option>
                          <option value="1">Armée de Terre (1)</option>
                          <option value="2">Armée de l'Air (2)</option>
                          <option value="3">Marine National (3)</option>
                          <option value="4">Gendarmerie National (4)</option>
                          <option value="5">Autre (5)</option>
                      </select>
                    </div>
                  </div>
  
                  <div className="display_row">
                    <div className="input_field">
                      <label  htmlFor="input_text">Conflit :</label>
                      <select name="conflit" id="conflit" onChange={(e) => setConflit(e.target.value)} >
                        <option value="" disabled selected >Choisissez un conflit</option>
                        {
                          allConflicts.map(
                            (conflict) =>
                          <option value={conflict.id}>{conflict.lieu}</option>
                          )
                        }
                      </select>
                    </div>
                  </div>
                  <div className="display_row">
                    <div className="input_field">
                      <label htmlFor="input_text">Unitée : </label>
                      <select name="unitee" id="unitee" onChange={(e) => setUnit(e.target.value)} required>
                      <option value={Unit}  disabled selected >Choisissez une unitée</option>

                        {
                          allUnits.map(
                            (unit) =>
                          <option value={unit.id}>{unit.nom}</option>
                          )
                        }
                        
                      </select>
                    </div>
                  </div>
                  <div className="textarea-container">
                    
                      <label htmlFor="input_text">Circonstances du déces :</label>
                      <textarea id="circonstence" type="text" data-length="4" value={Circ} onChange={(e) => setCirc(e.target.value)} />
                    
                  </div>
                  <div className="textarea-container">
                  
                      <label htmlFor="input_text">Biographie :</label>
                      <textarea id="biographie" type="text" data-length="4" value={Bio} onChange={(e) => setBio(e.target.value)} />
                    
                  </div>
                  
                  <div className="textarea-container">
                      <label htmlFor="input_text">Lieu de sépulture*</label>
                      <textarea id="sepulture" type="text-area" data-length="4" value={Sepult} onChange={(e) => setSepult(e.target.value)} />
                  </div>
                  

                {/* SUBMIT */}
                  <div className="display_row">
                    <Link className="btn-red" style={{textAlign:"center",fontSize:"auto"}}  to="/">
                      Annuler
                    </Link>
                    <button className='btn-green'  onClick={updateAPI} >
                      Modifier
                    </button>
                  </div>
                </form>
          </div>
        </div>
      );
    }


export default UpdateSoldier
