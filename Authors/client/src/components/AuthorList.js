  
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
export default props => {
    const {id} = props;
    const [author, setAuthor] = useState([]);

    useEffect(()=>{
        getAuthors();
        }
    ,[]);

    const deletePerson = (id) => {
        axios.delete('http://localhost:8000/api/users/delete/' + id)
            .then(res => {
                getAuthors();
            })
    }

    const getAuthors =() => {
        axios.get('http://localhost:8000/api/users/')
            .then(res=>{
                setAuthor(res.data.users)})
            .catch((error) =>{
                console.log(error)
            })
    } 
    
    return (
        <div>
            {author.map((user, idx) =>(
                <p key={user._id}><br />
                {user.name}
                <button class="buttons" onClick={navigate.bind(this, '/edit/'+ user._id)}>Edit</button>
                <button class="buttons" onClick={deletePerson.bind(this, user._id)}>Delete</button>
                </p>
            ))}
        </div>
    )
}