import '../Styles/header.css'
import { Link } from 'react-router-dom';


function Header(){
    return(
        <div className='header'>
            <h1>Mon app React</h1>
            <div>
            <Link className="link" to="/">Accueil</Link>
            <Link className="link" to="/exo1">Exercie 1</Link>
            <Link className="link" to="/exo2">Exercice 2</Link>
            </div>
        </div>
    )
}
export default Header