import "./write.css";
import {axiosInstance} from '../../config'
import {  useContext, useRef } from 'react'
import { Context } from "../context/Context";
export default function Write() {

  const titleRef = useRef()
  const descRef = useRef()
  const imageRef = useRef()
  const imgurlRef = useRef()
  const {user} = useContext(Context);
  
    const handleClick = async (e) => {
    e.preventDefault();  

    if (user.username ==='inesa') {
      try{
      const res = await axiosInstance.post('/posts/',  {
        username:"inesa",
        title:titleRef.current.value, 
        desc:descRef.current.value,
        photo:imgurlRef.current.value,

      })}catch(err){
        console.log(err);
      }
      titleRef.current.value=''
      descRef.current.value=''
      imgurlRef.current.value = ''
    }else {
      try{
        const res = await axiosInstance.post('/posts/draftPost',  {
          username:"inesa",
          title:titleRef.current.value, 
          desc:descRef.current.value,
          photo:imgurlRef.current.value,
  
        })}catch(err){
          console.log(err);
        }
        titleRef.current.value=''
        descRef.current.value=''
        imgurlRef.current.value = ''
    }}
  

  return (
    <div className="write">
     
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className='image-solved'>
      <input id="fileInput" type="file" ref = {imageRef} />
      <input className='input-image-url' type="text" placeholder='image url' ref={imgurlRef} />
      </div>
        <div className="writeFormGroup">
        
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            ref = {titleRef}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            ref = {descRef}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick ={ handleClick}>
          Publish
        </button>
      </form>
    </div>
  );
}