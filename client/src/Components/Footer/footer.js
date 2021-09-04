import './footer.css'
import { NavLink} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import app_store from '../../Assets/Images/Hero/Header/Download Badge/App Store Badge.png'
import google_play from '../../Assets/Images/Hero/Header/Download Badge/artwork.png'

function Footer(){
    return(
        <div className='footer-wrap'>
            <div className='left-footer'>
                <img src={logo} alt='logo' className='logo-footer'></img>
                <div>
                <NavLink to='#' className="link"> Download now </NavLink>
                <NavLink to='#' className="link"> License</NavLink>
                </div>
                <div>
                <NavLink to='#' className="link"> About </NavLink>
                <NavLink to='#' className="link"> Features</NavLink>
                <NavLink to='#' className="link"> Careers </NavLink>
                <NavLink to='#' className="link"> Help</NavLink>
                <NavLink to='#' className="link"> Privacy Policy</NavLink>
                </div>
                <div>
                    <p className='link'>© 2021 Healthy. All rights reserved</p>
                </div>
            </div>
            <div className='right-footer'>
                <p className='link'> Get the app</p>
                <img src={app_store} alt='app_store' className='store-n'></img>
                 <img src={google_play} alt='app_store' className='store-n'></img>
            </div>

        </div>
    )
}

export default Footer;