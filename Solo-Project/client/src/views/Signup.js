import React, {useEffect,useState} from 'react';
import {Link,navigate} from '@reach/router';
import banner from './banner.png'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios';
export default(props) => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
    const[address,setAddress] = useState("");
    const[whoopsie,setWhoopsie] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/new/",{name:name,email:email,phone:phone,address:address})
        .then(res => {
            if(res.data.error) {
                console.log(res.data.error.errors);
                setWhoopsie(res.data.error.errors);
            }
            else{
                navigate('/')
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <img className="banner"src={banner} alt="logo"></img>
            <Link className="adminLogin"to="/login/">Admin Login</Link><br/>
            <h3>If you would like to volunteer for one of our events please enter your info here:</h3>
            <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">First and Last name</InputGroup.Text>
    </InputGroup.Append>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
    </InputGroup.Append>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Phone Number</InputGroup.Text>
    </InputGroup.Append>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">Address</InputGroup.Text>
    </InputGroup.Append>
    <FormControl
      placeholder=""
      aria-label=""
      aria-describedby="basic-addon2"
    />
  </InputGroup>

  <Link to="/events/"><input type="submit"value="Submit"></input></Link>

        </form>
    )
}