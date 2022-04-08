import '../Styles/sidenav.css'
import { Link } from 'react-router-dom';


function SideNav(){
   
    return(
       <div id="mySidenav" class="sideNav">
            <Link className="link-sidenav" to="/">Site Memorial.fr</Link>
            <Link className="link-sidenav" to="/">Ministère des armées</Link>
            <Link className="link-sidenav" to="/">Instagram Memorial</Link>
        </div>
    )
}
export default SideNav