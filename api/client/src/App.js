import { BrowserRouter,  Switch , Route, Redirect} from 'react-router-dom'
import Navigator from './Components/Navigator/nav'
import './index.css'
import Land from './Components/land/land'
import Footer from './Components/Footer/footer.js'
import Blog from './Components/Blog/blog'
import Single from './Components/Blog/single/single'
import Write from './Components/Write/write'
import Sidebar from './Components/Sidebar/sidebar'
import {  useContext, useEffect, useState } from 'react'
import Admin from './Components/Admin/admin'
import { useLocation } from 'react-router';
import Register from './Components/Admin/register'
import Dashboard from './Components/Dashboard/dashboard'
import {Context} from '../src/Components/context/Context'
import {axiosInstance} from '../../client/src/config.js'


function App() {
  const {user} = useContext(Context)
  const [posts, setPosts] = useState([])
  const {search} = useLocation();
  

  useEffect(() =>{
    const fetchPosts = async ()=>{
       const res = await axiosInstance.get("/posts" + search )
       const resp = await axiosInstance.get("/draft" + search )
       console.log(resp.data)
       setPosts(res.data)
    }
    fetchPosts();
  },[search])

  

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
           <div className='body_top'>
              <Navigator />
              <Land />
              <div className='blog-side'>
              <Blog posts={posts} /> 
              <Sidebar />
              </div>   
              <Footer />
          </div>
        </Route>
        <Route path='/blog'>
              <Navigator />  
              <Blog posts={posts}/>
        </Route>
        <Route path='/post/:postId'>
              <Single />
        </Route>
        <Route path='/write'>
               <Navigator />
               <Write />
        </Route>
        <Route path = "/admin">
              <Admin />
        </Route>
      <Route path = '/about'>
          <Navigator />
        </Route>      
        <Route path ='/register'>
            <Register />
          </Route> 
          <Route path ='/dashboard/' render={ ()=>(user ? (<Dashboard />) : (<Redirect to="/admin" />) )}>
            
          </Route> 
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
