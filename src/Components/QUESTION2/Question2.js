import React,{useState} from 'react'
import Question3 from '../QUESTION3/Question3';
import String from './String';

function Question2() {
  const[show,setShow] = useState(false)
  return (
    <>
    {show ===true?<String/>:""}
  
    <div>
      <button className={show===true?"btn btn-danger":"btn btn-success"}onClick={()=>setShow((val)=>!val)} >{show===true?"hide":"show"}</button>
    </div>
    </>
  )
}

export default Question2