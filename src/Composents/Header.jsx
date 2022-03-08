import '../Styles/header.css'
import { Link } from 'react-router-dom';


function Header(){
    return(
        <div className='header'>
            <div className='header-container' >
                <Link className="link" to="/">
                    <p className='h1-like'>Memorial </p>
                </Link>
                <div>
                    <Link className="link" to="/update">Chercher un soldat</Link>
                    <Link className="link" to="/SearchByCurrentDate">Chercher une date</Link>
                    <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
                    <Link className="link" to="/add">Ajouter un soldat</Link>
                </div>
            </div>
        </div>
        
    )
}
export default Header