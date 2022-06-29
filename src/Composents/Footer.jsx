import '../Styles/footer.css'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div>
            <div className='main-container-background'>
                <p className='citation'>Parce qu'il est seul à pouvoir regarder la mort dans les yeux, seul le soldat est un homme libre !</p>
                <p style={{color:'gold'}}>Richard Hoffmann</p>
            </div>
            <div className='footer'>
                
                    <p>Copyright Memorial - 2022</p>
                    <a style={{color:'white'}} href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-castel-8a57771a6/" target="_blank">Par Frédéric Castel</a>
            
            </div>
        </div> 
    )
}
export default Footer