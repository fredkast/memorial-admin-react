// Component Create

// TODO : Import de photo !! 
// ameliorer les champs => conflit,unite,...

import React,{  useState } from "react";

function Add() {

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


  const imagePreview = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(URL.createObjectURL( e.target.files[0]));
      var file =  e.target.files[0];
      console.log(file)

      var reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onloadend = function() {
        console.log('RESULT', reader.result)
        setEncodedImage(reader.result);
      }
    }
  };

 // console.log("image = "+ Image)

    const uploadBodyRequest = 
      {
        "file":EncodedImage,
        "fileName": Firstname+Name,
      }
    console.log(uploadBodyRequest);


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
        "image": Image,
     }


function createSoldier(e){
  e.preventDefault();

  // 1  Upload de l'image vers freeimage.host

	 	fetch(
			'https://api.tytnature.fr/soldats/upload.php',
        {
          method: 'POST',
          body: JSON.stringify(uploadBodyRequest)
        }
		  )
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);

  // 2  Sauvegarde des informations vers l'API de MEMORIAL
        fetch('https://api.tytnature.fr/soldats/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyRequest)
        })
        .then((response) => response.json()
        .then((data) =>{
          console.log(data.message);
          if(data.message === "Add succesful"){
          alert("Données sauvegardées !")
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
      
  // //  Sauvegarde des informations vers l'API de MEMORIAL
  //  fetch('https://api.tytnature.fr/soldats/create', {
  //      method: 'POST',
  //      headers: { 'Content-Type': 'application/json' },
  //      body: JSON.stringify(bodyRequest)
  //    })
  //    .then((response) => response.json()
  //    .then((data) =>{
  //      console.log(data.message);
  //      if(data.message === "Add succesful"){
  //       alert("Données sauvegardées !")
  //      }
  //    })
  //    .catch((error) =>{ console.log(error)
  //     alert("Echec sauvegarde ! Veuillez remplir tous les champs.")
  //    })
  //    )
    }

  return (
    <div className="container-data">
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
                <label for="male">Homme :</label>
                  <input type="radio" name="gender" id="male" value="MALE" onChange={(e) => setGender(e.target.value)}/>
                  <label for="female" >Femme :</label>
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
                    <option value="1">Soldat de 2eme classe</option>
                    <option value="2">Soldat de 1ere classe</option>
                    <option value="3">Caporal</option>
                    <option value="4">Caporal-chef</option>
                    <option value="5">Caporal-chef de 1ere classe</option>
                    <option value="6">Sergent</option>
                    <option value="7">Sergent-Chef</option>
                    <option value="8">Adjudant</option>
                    <option value="9">Adjudant-Chef</option>
                    <option value="10">Major</option>
                    <option value="11">Sous-Lieutenant</option>
                    <option value="12">Lieutenant</option>
                    <option value="13">Capitaine</option>
                    <option value="15">Commandant</option>
                    <option value="16">Lieutenant-Colonel</option>
                    <option value="17">Colonel</option>
                    <option value="18">Géneral de Brigade</option>
                    <option value="19">Géneral de Division</option>
                    <option value="20">Géneral de Corps d'Armée</option>
                    <option value="21">Géneral de d'Armée</option>

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
            <div className="display_row">
                <label htmlFor="input_text">Photo du soldat: </label>
                <input id="add_img_soldier" type="file"  onChange={imagePreview}/>

            </div>
         
            <img style={{margin:20}} id="preview" src={Image} alt="Prévisualisation de l'image…"></img>

            <button className='btn-blue' onClick={createSoldier} >Ajouter</button>
          </form>
        </div>
  </div>
  );
}

export default Add;
