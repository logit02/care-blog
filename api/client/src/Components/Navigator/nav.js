import './nav.css'
import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import app_store from '../../Assets/Images/Hero/Header/Download Badge/App Store Badge.png'
import google_play from '../../Assets/Images/Hero/Header/Download Badge/artwork.png'
import {Context} from '../context/Context'
import {useContext} from 'react'

function Navigator(){
    const {user} = useContext(Context)
    const { dispatch } = useContext(Context);
    
    const handleLogout = () => {
        dispatch({ type: "LOG_OUT" });
        localStorage.removeItem("user")
      };
    return(
        <div className='nav-back'>
            <div className='nav-left'>
                <NavLink to='/' className='logo-link' ><img src={logo} alt='logo' className='logo'></img></NavLink>
                <NavLink to='/' className='title'>Healthy</NavLink>
                {user ? (
                    <div>
                    <NavLink to='/about' className="hide-link"> About Us </NavLink>
                    <NavLink to='/dashboard' className="activeLink"> Write </NavLink>
                    <NavLink to='/dashboard' className="activeLink"> My Account </NavLink>
                    </div>
                ):(
                    <NavLink to='/about' className="activeLink"> About Us </NavLink>)}
                    <NavLink to='/blog' className="activeLink"> Blog </NavLink>
               
                
                {user ? (
                    <div>
                    <NavLink to='/admin' className="hide-link"> Become a writer </NavLink>
                    <NavLink to='/admin' className="hide-link"> Login</NavLink>
                </div>
                ) : (
                    <div>
                        <NavLink to='/admin' className="activeLink"> Become a writer </NavLink>
                        <NavLink to='/admin' className="activeLink"> Login</NavLink>
                    </div>
                )}
            </div>
            <div className='nav-right'>
                {user ? (
                    <div className='nav-right-logged-in'>
                    <p className='greet-user'>Hey, {user.username}</p>
                    <img className="topImg" src={user.profilePic} alt=""/>
                    <button className='Log-out' onClick = {handleLogout}>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <img src={app_store} alt='app_store' className='store'></img>
                        <img src={google_play} alt='app_store' className='store'></img>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navigator;