import './single.css'
import Navigator from '../../Navigator/nav.js'
import SinglePost from './singlePost'

export default function Single(){
    return(
        <div className='single'>
            <Navigator />
            <SinglePost />
        </div>
    )
}