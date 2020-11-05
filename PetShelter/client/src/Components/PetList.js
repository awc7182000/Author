import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import {Link,navigate} from '@reach/router'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
export default props =>{
    const [pets,setPets] = useState([]);

    useEffect(() => {
        getPets();
    },[]);

    const deletePerson = (id) => {
        axios.delete('http://localhost:8000/api/users/delete/' +id )
        .then(res=> {
            getPets();
        })
    }

    const getPets =(res) =>{
        axios.get('http://localhost:8000/api/users/')
        .then(res => {
            setPets(res.data.users)
            console.log(pets)})
            .catch((error) => {
                console.log(error)
            })
        
    }
    return(
        <div>
            <Table striped bordered hover>
    <thead>
        <tr>
            <th>Name</th>
            <th>Pet Type</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {pets.map((user,idx) =>(
    <tr>
        <td>
            {user.name}
        </td>
        <td>
            {user.type}
        </td>
        <td>
        <button class="/pets/" onClick={navigate.bind(this, '/pets/'+ user._id)}>Details</button>
            <h7>|</h7>
        <button class="/pets/:id/edit" onClick={navigate.bind(this, '/pets/'+user._id+'/edit/')}>Edit</button>
        </td>
    </tr>
    ))}
    </tbody>
</Table>
        </div>
    )
}