import '../Styles/header.css'
import { Link } from 'react-router-dom';


function Header(){
    return(
        <div className='header'>
            <h1>Memorial</h1>
            <div>
            <Link className="link" to="/">Accueil</Link>
            <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
            <Link className="link" to="/SearchByCurrentDate">Chercher un soldat</Link>
            <Link className="link" to="/exo2">Exercice 2</Link>
            </div>
        </div>
    )
}
export default Header