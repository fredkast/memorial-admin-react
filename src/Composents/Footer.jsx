import '../Styles/footer.css'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div>
            <div className='container-data-background'>
                <p className='citation'>Parce qu'il est seul à pouvoir regarder la mort dans les yeux, seul le soldat est un homme libre !</p>
                <p >Richard Hoffmann</p>
            </div>
            <div className='footer'>
                
                    <p>Copyright Memorial - 2022</p>
                    <a style={{color:'black'}} href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-castel-%F0%9F%A7%91%E2%80%8D%F0%9F%9A%80%F0%9F%9A%80-8a57771a6/" target="_blank">Par Frédéric Castel</a>
            
            </div>
        </div> 
    )
}
export default Footer