import "./write.css";
import {axiosInstance} from '../../config'
import {  useRef } from 'react'

export default function Write() {

  const titleRef = useRef()
  const descRef = useRef()
  const imageRef = useRef()
  const handleClick = async (e) => {
    e.preventDefault();  
    try{
    const res = await axiosInstance.post('/posts',  {
      username:"inesa",
      title:titleRef.current.value, 
      desc:descRef.current.value,
      photo:'https://images.pexels.com/photos/7788611/pexels-photo-7788611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

    })}catch(err){
      console.log(err);
    }
    titleRef.current.value=''
    descRef.current.value=''
  }
  

  return (
    <div className="write">
     
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
      <input id="fileInput" type="file" ref = {imageRef} />
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