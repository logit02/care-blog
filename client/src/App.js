import { BrowserRouter, Redirect, Switch , Route} from 'react-router-dom'
import Navigator from './Components/Navigator/nav'
import './index.css'
import Land from './Components/land/land'
import Land2 from './Components/land-2/land-2'
import Stories from './Components/stories/stories.js'
import Info from './Components/info/info.js'

import Footer from './Components/Footer/footer.js'
import Blog from './Components/Blog/blog'
import Single from './Components/Blog/single/single'
import Write from './Components/Write/write'
import Sidebar from './Components/Sidebar/sidebar'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
           <div className='body_top'>
              <Navigator />
              <Land />
              <div className='blog-side'>
              <Blog /> 
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
           <div className='body_top'>
               
              <Single />
          </div>
        </Route>
        <Route path='/write'>
           <div className='body_top'>
               <Navigator />
              <Write />
          </div>
        </Route>
        

        <Redirect from ='/' to='/home'></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
