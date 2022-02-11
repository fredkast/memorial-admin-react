import '../Styles/header.css'
import { Link } from 'react-router-dom';


function Header(){
    return(
        <div className='header'>
            <div className='header-container' >
                <p className='h1-like'>Memorial</p>
                <div>
                <Link className="link" to="/">Accueil</Link>
                <Link className="link" to="/update">Modifier</Link>
                <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
                <Link className="link" to="/SearchByCurrentDate">Chercher une date</Link>
                </div>
            </div>
        </div>
        
    )
}
export default Header