import '../Styles/sidenav.css'
import { Link } from 'react-router-dom';


function SideNav(){
    const date = new Date()
    const currentDay = date.getDate();
    const currentDate = date.getDay();
    const currentYear = date.getFullYear()
    return(
       <div id="mySidenav" class="sideNav">
            <p style={{textAlign:'center'}}>Date : {currentDate}-{currentDay}-{currentYear}</p>
            <Link className="link-sidenav" to="/">Site Memorial.fr</Link>
            <Link className="link-sidenav" to="/">Ministère des armées</Link>
            <Link className="link-sidenav" to="/">Instagram Memorial</Link>
        </div>
    )
}
export default SideNav