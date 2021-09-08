import './info.css'
import icon_01 from '../../Assets/Images/Feature/Multiple/Feature Icons/01.png'
import icon_02 from '../../Assets/Images/Feature/Multiple/Feature Icons/02.png'
import icon_03 from '../../Assets/Images/Feature/Multiple/Feature Icons/03.png'
import icon_04 from '../../Assets/Images/Feature/Multiple/Feature Icons/04.png'

function Info(){
    return(
        <div className='wrapper'>
            <div className='left-info'>
                <h1 className='big-text'>Our 18 years of <br/> achievements</h1>
                <p className='small-text'>With our super powers we have reached this</p>
            </div>
            <div className='right-info'>
                <div className='top'>
                    <div className='element'>
                        <img src= {icon_01} className='icons' alt='#' ></img>
                        <div> 
                            <p className='big-info'>10,000+ </p>
                            <p className='small-info'>Download per pay</p>
                        </div>
                       
                    </div>
                    <div className='element'>
                    <img src= {icon_02} className='icons' alt='#' ></img>
                    <div>
                        <p className='big-info'>2 Million</p>
                        <p className='small-info'>Users</p>
                    </div>
                       
                    </div>
                   
                </div>
                <div className='top'>
                    <div className='element'>
                    <img src= {icon_03} className='icons' alt='#' ></img>
                    <div>
                        <p className='big-info'> 500+</p>
                        <p className='small-info'>Clients</p>
                    </div>
                       
                    </div>
                    <div className='element'>
                    <img src= {icon_04} className='icons' alt='#' ></img>
                    <div>
                        <p className='big-info'>140</p>
                        <p className='small-info'>Countries</p>
                    </div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Info;