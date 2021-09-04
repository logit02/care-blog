import './blog.css'
import Post from './post.js'

function Blog(){
    return(
        <div className='posts'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
       
    )
}

export default Blog;