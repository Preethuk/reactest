import React,{useState} from 'react'
import Question3 from '../QUESTION3/Question3';
import String from './String';

function Question2() {
  const[show,setShow] = useState(false)
  return (
    <>
    {show ===true?<String/>:""}
  
    <div className="text-center">
      <button className={show===true?"btn btn-danger mt-5":"btn btn-success mt-4"}onClick={()=>setShow((val)=>!val)} >{show===true?"hide":"show"}</button>
    </div>
    </>
  )
}

export default Question2