import axios from 'axios';
import { useEffect , useState} from 'react';
import './sidebar.css'
import {Link} from 'react-router-dom'
import {axiosInstance} from '../../client/src/config.js'
export default function Sidebar (){
    const [cats, setCats]= useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axiosInstance.get("/categories")
            setCats(res.data)
            
        }
        getCats();
},[])
    return (
        <div className='sidebar'>
            <ul className='ul-cat'>
                <p className='cat-title'>Categories</p>
                {cats.map((c)=>(
                   <Link className='cat' to={`/?cat=${c.name}`}> <li className='cat'>{c.name}</li> </Link>
                ))}
            
            </ul>
            <ul className='ul-cat'>
                <p className='cat-title'>Authors</p>
                <li className='cat'>Emili J</li>
                <li className='cat'>Jonas A</li>
                <li className='cat'>Inesa K</li>
                <li className='cat'>Donald L</li>
            </ul>
            <ul className='ul-cat'>
                <p className='cat-title'>Published Date</p>
                <li className='cat'>Last week</li>
                <li className='cat'>Last month</li>
                <li className='cat'>Last year</li>
                <li className='cat'>All time</li>
            </ul>
        </div>
    )
}