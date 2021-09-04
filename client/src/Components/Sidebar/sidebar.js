import './sidebar.css'
export default function Sidebar (){
    return (
        <div className='sidebar'>
            <ul className='ul-cat'>
                <p className='cat-title'>Categories</p>
                <li className='cat'>Music</li>
                <li className='cat'>Skin</li>
                <li className='cat'>Adventure</li>
                <li className='cat'>Health</li>
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