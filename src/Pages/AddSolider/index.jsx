// Component Create Soldier

import { useNavigate } from 'react-router-dom';
import React,{  useState } from "react";

function Add() {

    let navigate = useNavigate()

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
    const [EncodedImage,setEncodedImage] = useState([])

  // preview de l'image choisi pour le soldat
  const imagePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(URL.createObjectURL( e.target.files[0]));
      var file =  e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        setEncodedImage(reader.result);
      }
    }
  };
  // body de la requete Upload soldier Img 
  const uploadBodyRequest = 
      {
        "file":EncodedImage,
        "fileName": Firstname+Name,
      }

    // Body de la requete Create
  const bodyRequest = 
      {
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
        "image": 'https://api.projet-memorial.fr/img/soldiers/'+Firstname+Name+'.jpg',
     }

function createSoldier(e){
  e.preventDefault();

    // #1 upload image to server
    fetch(
			'https://api.projet-memorial.fr/soldats/upload.php',
        {
          method: 'POST',
          body: JSON.stringify(uploadBodyRequest)
        }
		  )
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);

  // 2  Sauvegarde des informations vers l'API de MEMORIAL
        fetch('https://api.projet-memorial.fr/soldats/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyRequest)
        })
        .then((response) => response.json()
        .then((data) =>{
          console.log(data.message);
          if(data.message === "Add succesful"){
          alert("Données sauvegardées !")
          navigate("/soldats",{ replace: true })

          }
        })
        .catch((error) =>{ console.log(error)
        alert("Echec sauvegarde ! Veuillez remplir tous les champs.")
        })
        )
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }

  return (
    <div className="main-container">
    <h1 className="title">Ajouter un soldat</h1>
    <p className="underline">Ajouter un soldat dans la base de données de Memorial</p>

    <div className='first-container'>
        <form className="form" >   
            <div className="display_row">
                <div className="input_field">
                  <label htmlFor="input_text">Nom :</label>
                  <input id="name" type="text" data-length="4" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input_field">
                  <label htmlFor="input_text">Prénom :</label>
                  <input id="prenom" type="text" data-length="4" onChange={(e) => setFirstname(e.target.value)}/>
                </div>
            </div>
            <div className="display_row">
              <label>Genre:</label>
              <div className="display_row">
                <label for="male">&#9894;  Homme :</label>
                  <input type="radio" name="gender" id="male" value="MALE" onChange={(e) => setGender(e.target.value)}/>
                  <label for="female" >&#9896;  Femme :</label>
                  <input type="radio" name="gender" id="female" value="FEMALE" onChange={(e) => setGender(e.target.value)}/>
              </div>
            </div>

            <div className="display_row"> 
              <div className="input_field">
                <label htmlFor="input_text">Age :</label>
                <input id="age" type="number" data-length="4" onChange={(e) => setAge(e.target.value)}/> 
              </div>
              <div className="input_field">
                <label htmlFor="input_text">Grade :</label>
                <select name="grade" id="grade" onChange={(e) => setGrade(e.target.value)}>
                    <option value="0">Grade</option>
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
                <label htmlFor="input_text">Date déces :</label>
                <input id="deces" type="date" data-length="4" onChange={(e) => setDate(e.target.value)}/>
              </div>
              
              <div className="input_field">
                <label htmlFor="input_text">Armée :</label>
                <select name="armee" id="armee" onChange={(e) => setArmy(e.target.value)}>
                    <option value="0"></option>
                    <option value="1">Armée de Terre</option>
                    <option value="2">Armée de l'Air</option>
                    <option value="3">Marine National</option>
                    <option value="4">Gendarmerie National</option>
                    <option value="5">Autre</option>
                </select>
              </div>
            </div>

            <h2 style={{color:"red"}}>Pensez à créer l'unitée et le conflit avant si ils ne pas dans la liste.</h2>


            <div className="input_field">
                <label htmlFor="input_text">Conflit :</label>
                <select name="conflit" id="conflit" onChange={(e) => setConflit(e.target.value)}>
                    <option value="0"></option>
                    <option value="1">Mali</option>
                    
                </select>
            </div>
            
            <div className="input_field">
                <label htmlFor="input_text">Unitée :</label>
                <select name="unitee" id="unitee" onChange={(e) => setUnit(e.target.value)}>
                    <option value="0"></option>
                    <option value="1">3eme Regiment d'Infanterie de Marine</option>
                    
                </select>
            </div>
          
            <div className="textarea-container">
              
                <label htmlFor="input_text">Circonstences du déces :</label>
                <textarea id="circonstence" type="text" data-length="4" onChange={(e) => setCirc(e.target.value)}/>
              
            </div>

            <div className="textarea-container">
                <label htmlFor="input_text">Biographie :</label>
                <textarea id="biographie" type="text" data-length="4" onChange={(e) => setBio(e.target.value)}/>
            </div>
            
            <div className="textarea-container">
                <label htmlFor="input_text">Lieu de sépulture*</label>
                <textarea id="sepulture" type="text-area" data-length="4" onChange={(e) => setSepult(e.target.value)}/>
            </div>
            <p style={{fontStyle:'italic'}}>Taille conseillée : 500x500px, format JPG,JEP,PNG</p>
            <div className="display_row">
               
                <label htmlFor="input_text">Photo du soldat: </label>
                <input id="add_img_soldier" type="file"  onChange={imagePreview}/>

            </div>
         
            <img style={{margin:20}} id="preview"  className="soldier-img" src={Image} alt="Prévisualisation de l'image…"></img>

            <button className='btn-green' onClick={createSoldier} >Ajouter</button>
          </form>
        </div>
  </div>
  );
}

export default Add;
