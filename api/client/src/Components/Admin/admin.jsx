import './admin.css'
import axjik from '../../Assets/Images/axjik.jpg'
import logo from '../../Assets/logo.png'
import icon from '../../Assets/arrow.png'
import {Link} from 'react-router-dom'
import { useContext, useRef } from 'react'
import { Context } from '../context/Context'
import axios from 'axios'
import {axiosInstance} from '../../client/src/config.js'


export default function Admin (){
    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching} = useContext(Context)


    
    function register(){
        return( window.location ='/register')
    }


    const handleClick = async (e) =>{ 
       
       e.preventDefault();  
       dispatch({type:"LOGIN_START"});
       try{
        
            const res = await axiosInstance.post("/auth/login", { 
                username:userRef.current.value,
                password:passwordRef.current.value,
            })   
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
           
       }catch(err) { 
            dispatch({type:"LOGIN_FAILURE"});
       }
    }


    
    return(
        <div className='admin'>
        <img className = 'image-admin' src = {axjik} alt='vector-girl'></img>

            <div className='login'>
           <Link to = '/'> <img src={icon} alt='icon' className='icon'></img> </Link>
            <img src={logo} alt='logo' className='logo-admin'></img>
                <div className='input-part'>
                    <p className='sign-in-title'>Sign in to dashboard</p>
                    <p className='hint'>Username</p>
                    <input type = 'text' className='input' placeholder='input your username here' ref = {userRef}></input>
                    <p className='hint'>Password</p>
                    <input type = 'text' className='input' placeholder='input your password here' ref = {passwordRef}></input>
                </div>
                <div className='login-up'>
                    <button className='button-login' onClick = {handleClick} disabled = {isFetching}>Login</button>
                    <p className='or'>or</p>
                    <button className='button-signup' onClick={register}>Signup</button>
                </div> 
            </div>
           
        </div>
    )
}

