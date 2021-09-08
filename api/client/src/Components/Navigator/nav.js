import './nav.css'
import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import app_store from '../../Assets/Images/Hero/Header/Download Badge/App Store Badge.png'
import google_play from '../../Assets/Images/Hero/Header/Download Badge/artwork.png'

function Navigator(){
    return(
        <div className='nav-back'>
            <div className='nav-left'>
                <NavLink to='/' className='logo-link' ><img src={logo} alt='logo' className='logo'></img></NavLink>
                <NavLink to='/' className='title'>Healthy</NavLink>
                <NavLink to='/about' className="activeLink"> About Us </NavLink>
                <NavLink to='/blog' className="activeLink"> Blog </NavLink>
                <NavLink to='/admin' className="activeLink"> Become a writer </NavLink>
                <NavLink to='/admin' className="activeLink"> Login</NavLink>
                

            </div>
            <div className='nav-right'>
            <img src={app_store} alt='app_store' className='store'></img>
            <img src={google_play} alt='app_store' className='store'></img>

            </div>
        </div>
    )
}

export default Navigator;