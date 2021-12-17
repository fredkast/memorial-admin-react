import '../../Styles/listeperso.css'
import {list} from '../../Data/Liste'


function ListePerso() {
  return (
    <div className="container-data">
        <h1 className="title">Exercice 1</h1>
        <ul className="perso-list">
          {list.map((perso) =>
            <li className={"perso-card-"+perso.type} key={perso.id} >
              <p>#{perso.id}</p>
              <img className='perso-img' src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+perso.id+'.svg'}></img>
              <p className="perso-name">{ perso.name }</p>
              <p className="perso-gender">Type: {perso.type}</p>
            </li> 
            )
          }
          
        </ul>
    </div>

   
  );
}

export default ListePerso;
