import '../Styles/footer.css'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div className='footer'>
            
            <div>
            <Link className="link" to="/">Accueil</Link>
            <Link className="link" to="/update">Modifier</Link>
            <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
            <Link className="link" to="/SearchByCurrentDate">Chercher un soldat</Link>
            <Link className="link" to="/exo2">Exercice 2</Link>
            </div>
        </div>
    )
}
export default Footer