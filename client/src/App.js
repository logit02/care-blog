import { BrowserRouter, Redirect, Switch , Route} from 'react-router-dom'
import Navigator from './Components/Navigator/nav'
import './index.css'
import Land from './Components/land/land'
import Footer from './Components/Footer/footer.js'
import Blog from './Components/Blog/blog'
import Single from './Components/Blog/single/single'
import Write from './Components/Write/write'
import Sidebar from './Components/Sidebar/sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    const fetchPosts = async ()=>{
       const res = await axios.get("http://localhost:5000/api/posts")
       setPosts(res.data)
    }
    fetchPosts()
  })


  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
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
           <div className='body_top'>
              <Navigator />  
              <Blog /> 
          </div>
        </Route>
        <Route path='/post/:postId'>
         
              <Single />
              
        
        </Route>
        <Route path='/write'>
           
               <Navigator />
              <Write />
        
        </Route>
        

        <Redirect from ='/' to='/home'></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
