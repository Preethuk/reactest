import React from "react";
import { Form, Button } from "react-bootstrap";
import {useState} from 'react'
import './Question3.css'

function Question3() {
  const[display,setdisplay]=useState('')
  
  const [form,setForm]=useState(
    {
      firstname:"",
      lastname:"",
      Email:"",
      Password:""
    }
  )
 
const submitValue=async(e)=>{
  e.preventDefault();
  console.log(form);
  await setdisplay(form)
  console.log("qwerty",display);
}

const handlechange=(e)=>{
  console.log(form);
  setForm({...form,[e.target.name]:e.target.value})
}

  return (
    <div className="textdata">
      <div className="main">
        <Form onSubmit={submitValue}>
          
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="firstname"
              placeholder="Enter first name"
              name="firstname"
             
              onChange={handlechange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="lastname"
              name="lastname"
              placeholder="Enter last name"
              required
             
              onChange={handlechange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="Email"
              placeholder="Enter email"
              required
              
              onChange={handlechange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="Password"
              placeholder="Password"
              required
            
              onChange={handlechange}
            />
          </Form.Group>

          <Button
            variant="secondary"
            type="submit"
            size="lg"
          
          >
            Submit
          </Button>
        
        </Form>

        <div className="display2">
         
          
           {display.firstname}
        
          {display.lastname}
          <br/>
          {display.Email}
          <br/>
          {display.Password}
        </div>
        {/* <div style={{marginLeft:'500px'}}>
          <p>{details.firstName}</p>
          <br/>
          <p>{details.lastName}</p>
          <br/>
          <p>{details.Email}</p>
          <br/>
          <p>{details.Password}</p> */}
      </div>
    </div>
  );
}

export default Question3;