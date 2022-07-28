import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function String() {
  return (
    <div className='p-5 gray'>
         <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-3'>
        Submit
      </Button>
    </Form>
    </div>
  )
}
