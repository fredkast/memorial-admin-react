import '../Styles/sidenav.css'
import { Link } from 'react-router-dom';


function SideNav(){
    const date = new Date()
    const currentDay = date.getDate()
    const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    const currentMonth = months[date.getMonth()]
    const currentYear = date.getFullYear()

   const closeToggle = document.getElementById('close_toggle');
   const mySidenav = document.getElementById('mySidenav');

       
    

    return(
       <div id="mySidenav" class="sideNav">
                    <p className='icon-close-sidenav' id="close_toggle">&#x21e6;</p>
                    <p className='date'>{currentDay} {currentMonth} {currentYear}</p>
                    <Link className="link" to="/search">Chercher un soldat</Link>
                    <Link className="link" to="/SearchByCurrentDate">Chercher une date</Link>
                    <Link className="link" to="/add">Ajouter un soldat</Link>
                    <Link className="link" to="/ListeSoldats">Liste des soldats</Link>
        </div>


    )
}
export default SideNav 