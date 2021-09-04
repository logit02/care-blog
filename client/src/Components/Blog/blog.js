import './blog.css'
import Post from './post.js'

function Blog({posts}){
    return(
        <div className='posts'>
            {posts.map((p) =>(
                <Post post ={p} />
            ))}
        </div>
       
    )
}

export default Blog;