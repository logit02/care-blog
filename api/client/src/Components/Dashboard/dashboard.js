import './dashboard.css'
import icon1 from '../../Assets/Vector.png'
import icon2 from '../../Assets/Vector-2.png'
import icon3 from '../../Assets/Group 2.png'
import icon4 from '../../Assets/Group 6.png'
import icon5 from '../../Assets/Vector-4.png'
import Write from '../Write/write'
import logo from '../../Assets/logo.png'
import { BrowserRouter,  Switch , Route, NavLink, Redirect} from 'react-router-dom'
import Navigator from '../Navigator/nav'


export default function Dashboard() { 
    return(
    <div className='dashboard'>
        <div className='dash-left'>
        <NavLink to ='/'><img src={logo} alt='logo' className='logo-dashboard'></img></NavLink>
            <ul className='icons'>
                <NavLink to ='/dashboard/home'><li className='icon-containter'><img src={icon1} alt='home' className='dash-left-icons'></img></li></NavLink>
                <NavLink to ='/dashboard/settings/'><li className='icon-containter'><img src={icon4} alt='home' className='dash-left-icons'></img></li></NavLink>
                <li className='icon-containter'><img src={icon3} alt='home' className='dash-left-icons'></img></li>
                <li className='icon-containter'><img src={icon5} alt='home' className='dash-left-icons'></img></li>
                <li className='icon-containter'><img src={icon2} alt='home' className='dash-left-icons-last'></img></li>
            </ul>
        </div>
        <div className='dash-right'>
           
        </div>

      
        <Switch>
        <Route exact path='/dashboard'
        component = {Write}>
            
        </Route>
        <Route path='/dashboard/home/'
        component = {Write}>
            
        </Route>
        <Route path='/dashboard/settings/'>
            <Navigator />
        </Route>
        </Switch>
       
    </div>
    )}