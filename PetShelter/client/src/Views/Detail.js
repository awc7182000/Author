import React, {useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {Link, navigate} from '@reach/router'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'
export default props => {
    const[name,setName] = useState("");
    const{id} =props;

    useEffect(() =>{
        getName();
    },[]);

    const getName = () =>{
        axios.get('http://localhost:8000/api/users/' +id)
        .then(res => {
            console.log(res.data.user);
            setName(res.data.user)
        })
    }

    const deletePerson = (id) => {
        axios.delete('http://localhost:8000/api/users/delete/' +id)
        .then(res => {
            navigate('/')
        })
    }

    return(
        <div>
            <Link class="toplink"to="/">back to home</Link>
            <h2>Details about: {name.name}</h2><Button id="adopt"onClick= {deletePerson.bind(this,name._id)}>Adopt {name.name}</Button>
            <Jumbotron class="jumbo"fluid>
  <container>
            <br/><h3>Pet Type: {name.type}</h3>
            <br/><h3>Description: {name.description}</h3>
            <br/><h3><ul>Skills:    {name.first} | {name.second} | {name.third}</ul></h3>
            </container>
</Jumbotron>
        </div>
    )
}