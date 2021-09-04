import './nav.css'
import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../../Assets/logo.png'

function Navigator(){
    return(
        <div className='nav-back'>
            <div className='nav-left'>
                <NavLink to='/home' ><img src={logo} alt='logo' className='logo'></img></NavLink>
                <NavLink to='/home' className='title'>Healthy</NavLink>
                <NavLink to='/me' className="activeLink"> About Us </NavLink>
                <NavLink to='/blog' className="activeLink"> Blog </NavLink>
                <NavLink to='/write' className="activeLink"> Write </NavLink>
                

            </div>
            <div className='nav-right'>
                <NavLink to='/login' className="activeLink"> Login </NavLink>
                <NavLink to='/signup' className="activeLink"> Signup </NavLink>


            </div>
        </div>
    )
}

export default Navigator;