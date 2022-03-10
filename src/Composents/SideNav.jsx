import '../Styles/sidenav.css'
import { Link } from 'react-router-dom';


function SideNav(){
    const date = new Date()
    const currentDay = date.getDate()
    return(
       <div id="mySidenav" class="sideNav">
                    <p>{currentDay}</p>
                    <Link className="link" to="/search">Chercher un soldat</Link>
                    <Link className="link" to="/SearchByCurrentDate">Chercher une date</Link>
                    <Link className="link" to="/add">Ajouter un soldat</Link>
                    <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
        </div>

             
    )
}
export default SideNav