import { Link } from "react-router-dom";
import "./singlePost.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import {axiosInstance} from '../../../config'


export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async ()=>{
    const res = await axiosInstance.get("/posts/"+path)
   
    setPost(res.data)
  
  };
  getPost()
  }, [path])
 
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
        <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        /> )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <div>
            Author:
            <b className="singlePostAuthor">
              <Link className="singlePostAuthor" to={`/blog/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </div>
          <div className='singlePostAuthor'>{new Date(post.createdAt).toDateString()}</div>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}