import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./BookDetails.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Login = () => {
    const handleClick = (e) =>{
        e.preventDefault();
    }
  return (
    <div >
        <span className="back-arrow-container">
        <Link to="/" title='Go To Home Page'>
          <IoArrowBackCircleOutline size={48} />
        </Link>
      </span>
        <Card style={{ width: '50%', margin:"9rem auto", padding:"6rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", background:"#e9ecef" }}>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fw-bold'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="warning" type="submit" style={{width:"100%"}} onClick={handleClick}>
        Submit
      </Button>
    </Form>
    </Card>
    </div>
  )
}

export default Login
