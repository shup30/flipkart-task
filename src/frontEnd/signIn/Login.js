import React, {useState} from 'react';
import './Login.css';
import {Form, Button}  from 'react-bootstrap';

const Login = () => {
    const [user,setUser] = useState({});

    const handleInput = (e) =>{
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
      }
      
 return ( <>
    <Form className="login">
    <h1> Login</h1>
    
  <Form.Group controlId="formBasicEmail" className="inp-label">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" name="email" onChange={handleInput} placeholder="Enter email" className="input"/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword" className="inp-label">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" onChange={handleInput} placeholder="Password"className="input" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep Me Logged In (for up to 365days)" />
  </Form.Group>
  <Button className="btn">
        Login
  </Button>
  
</Form>
    
    </> );
}
 
export default Login;