import './land-2.css'
import icon_01 from '../../Assets/Images/Feature/Multiple/Feature Icons/01.png'
import icon_02 from '../../Assets/Images/Feature/Multiple/Feature Icons/02.png'
import icon_03 from '../../Assets/Images/Feature/Multiple/Feature Icons/03.png'
import icon_04 from '../../Assets/Images/Feature/Multiple/Feature Icons/04.png'
import icon_05 from '../../Assets/Images/Feature/Multiple/Feature Icons/05.png'
import icon_06 from '../../Assets/Images/Feature/Multiple/Feature Icons/08.png'


function Land2(){
    return (
    
   <div className='all_items'>
       
       <p className='topic'>Tailor-made features</p>
       <p className='desc'> Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
       <div className='items'>
           <div className='item'>
           <img src= {icon_01} className='icon' alt='#' ></img>
               <p className='topics'>Robust Workflow</p>
               <p className='topic-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
           </div>
           <div className='item'>
           <img src= {icon_02} className='icon' alt='#' ></img>
               <p className='topics'>Flexibility</p>
               <p className='topic-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
           </div>
           <div className='item'>
           <img src= {icon_03} className='icon' alt='#' ></img>
               <p className='topics'>User Friendly</p>
               <p className='topic-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
           </div>

           
          </div>
          <div className='items'>
           <div className='item'>
           <img src= {icon_04} className='icon' alt='#' ></img>
               <p className='topics'>Multiple Layouts</p>
               <p className='topic-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
           </div>
           <div className='item'>
           <img src= {icon_05} className='icon' alt='#' ></img>
               <p className='topics'>Better Components</p>
               <p className='topic-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
           </div>
           <div className='item'>
           <img src= {icon_06} className='icon' alt='#' ></img>
               <p className='topics'>Well organised</p>
               <p className='topic-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
           </div>

           
          </div>

         
   </div>
        
        
)}

export default Land2;