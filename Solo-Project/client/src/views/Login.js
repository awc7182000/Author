import React from 'react'
import {Link, navigate } from '@reach/router'
import {useAuth0} from '@auth0/auth0-react'
import banner from './banner.png'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {
    const{loginWithRedirect, isAuthenticated} = useAuth0();
    
    if (isAuthenticated) {
        navigate('/admin/')
      }

    return (
        // !isAuthenticated && (
        <div>
            <img className="Login"src={banner} alt="logo"></img><br/>
            <h1>Admin login</h1>
            <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Username</InputGroup.Text>
    </InputGroup.Append>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Password</InputGroup.Text>
    </InputGroup.Append>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>
            <Button variant="outline-warning"onClick={()=> loginWithRedirect()}>Login</Button>{' '}
            
        </div>
    )
}

export default Login
