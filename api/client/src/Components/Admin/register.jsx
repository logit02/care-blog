import './admin.css'
import axjik from '../../Assets/5079374.jpg'
import logo from '../../Assets/logo.png'
import icon from '../../Assets/arrow.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {axiosInstance} from '../../config'


export default function Register (){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleClick = async (e) => { 
        e.preventDefault(); 
        try{
            setError(true); 
        const res = await axiosInstance.post("/auth/register", {
            username,email,password,
        })
        res.data && window.location.replace("/admin");
        }catch (err){
            console.log(err);
            setError(true); 
        }}

    return(
        <div className='admin'>
        <img className = 'image-admin' src = {axjik} alt='vector-girl'></img>

            <div className='register'>
           <Link to = '/'> <img src={icon} alt='icon' className='icon-reg'></img> </Link>
            <img src={logo} alt='logo' className='logo-admin'></img>
                <div className='input-part'>
                    <p className='sign-in-title'>Join the family :)</p>
                    <p className='hint'>Username</p>
                    <input type = 'text' className='input' placeholder='input your username here' onChange = {e => setUsername(e.target.value)}></input>
                    <p className='hint'>Email</p>
                    <input type = 'text' className='input' placeholder='input your email here' onChange = {e => setEmail(e.target.value)}></input>
                    <p className='hint'>Password</p>
                    <input type = 'password' className='input' placeholder='input your password here' onChange = {e => setPassword(e.target.value)}></input>
                    {/*<p className='hint'>Repeat the Password</p>
                    <input type = 'text' className='input' placeholder='Repeat your password here'></input> */}
                     {error && <div className='error'>Something went wrong! </div>}
                </div>
                <div className='login-up'>
                    <button className='button-signup' onClick={handleClick}>Signup</button>
                  
                   
                </div> 
            </div>
           
        </div>
    )
}