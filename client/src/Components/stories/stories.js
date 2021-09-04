import './stories.css'
import quotes from '../../Assets/Images/Testimonial/quotes.png'
import hubspot from '../../Assets/Images/Testimonial/Hubspot Logo.png'
import airbnb from '../../Assets/Images/Testimonial/Vector.png'
import bookmyshow from '../../Assets/Images/Testimonial/BookMyShow Logo.png'
function Stories(){
    return(
        <div className='some-staff'>
            <div className='back-stories'>
                 <img src={quotes} alt='#' className='quotes'></img>
                  <h1 className='stories-title'>Real Stories from <br/>Real Customers </h1>
             </div>
             <p className='inspire'>Get inspired by these stories</p>

             <div className='hubspot'>
                 <img src={hubspot} className = 'hub' alt='#'></img>
                 <div className='wrap'>
                    <img src={quotes} alt='#' className='quotes-little'></img>
                    <p className='comments'>
                    To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.
                    </p>
                    
                </div>
                <p className='name'>Floyd Miles</p>
                <p className='position'>Vice President, GoPro</p>
             </div>
             <div className='airbnb'>
                <img src={airbnb} className = 'hub' alt='#'></img>
                <div className='wrap'>
                    <img src={quotes} alt='#' className='quotes-little'></img>
                    <p className='comments'>
                    I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.
                    </p>
                    
                </div>
                <p className='name'>Jane Cooper </p>
                <p className='position'>CEO, Airbnb</p>
             </div>
             <div className='bookmyshow'>
                 <img src={bookmyshow} className = 'hub' alt='#'></img>
                 <div className='wrap'>
                    <img src={quotes} alt='#' className='quotes-little'></img>
                    <p className='comments'>
                    Landify saved our time in designing my company page.It was great.Thanks to the landify team for quality and fast delivery.
                    </p>
                    
                </div>
                <p className='name'>Kristin Watson</p>
                <p className='position'>Co-Founder, BookMyShow</p>
            </div>
        </div>
    )
}

export default Stories;