 
 import { useEffect, useContext, useState} from 'react'
 import {Link} from 'react-router-dom'
 import { useLocation } from 'react-router';
 import {Context} from '../../context/Context'
import {axiosInstance} from '../../../config'


export default function DraftPosts(){
    const {user} = useContext(Context)
    const [posts, setPosts] = useState([])
    const {search} = useLocation();

   
      
    return(
        <div className='posts'>
            {posts.map((p) =>(
                <draftPost post ={p} />
            ))}
        </div>
    )
}


function draftPost( {post} ) {
    return (
      <div className="post">
        {post.photo && (
        <img
          className="postImg"
          src={post.photo}
          alt=""
         
        />
        )}
        <div className="postInfo">
          <div className="postCats">
            
              {post.categories.map((c) => ( 
                <Link className="post-link-cat" to="/posts?cat=Music">
               <span className="postCat"> {c.name}  </span>
              </Link>
              ))}
              
          
            
          </div>
          <Link to={`/post/${post._id} `} className="post-link">
             <span className="postTitle"> 
           
              {post.title}
              </span>
            </Link>
          
          
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">
          {post.desc}
        </p>
      </div>
    );
  }