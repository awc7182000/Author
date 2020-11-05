import React, {useState} from 'react';
import {Link,navigate} from '@reach/router';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
export default(props) => {
    const[name,setName] = useState("");
    const[type,setType] = useState("");
    const[description,setDescription] = useState("");
    const[first,setFirst] = useState("");
    const[second,setSecond] = useState("");
    const[third,setThird] = useState("");
    const[whoopsie,setWhoopsie] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new/', {name:name,type:type,description:description,first:first,second:second,third:third})
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
            console.log(error)
        })
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <Link class="toplink"to="/">Back to home</Link>
            <h2>Know a pet needing a home?</h2>
            <br/>
            <Jumbotron fluid>
  <container>
            <label>Pet Name:</label><label>Skill 1:</label>
            <br/>
            <input type="text" onChange ={e =>setName(e.target.value)}></input><input type="text" onChange ={e =>setFirst(e.target.value)}></input>
            <br/>
            <label>Pet Type:</label><label>Skill 2:</label>
            <br/>
            <input type="text" onChange ={e =>setType(e.target.value)}></input><input type="text" onChange ={e =>setSecond(e.target.value)}></input>
            <br/>
            <label>Pet Description:</label>
            <label>Skill 3:</label>
            <br/>
            <input type="text" onChange ={e =>setDescription(e.target.value)}></input><input type="text" onChange ={e =>setThird(e.target.value)}></input>
            <br/>
            
            
            <input type="submit"value="Add Pet"></input></container><br/>
            {whoopsie.name ? <span>{whoopsie.name.message}</span>:null}
            <br/>
            {whoopsie.type ? <span>{whoopsie.type.message}</span>:null}
            <br/>
            {whoopsie.description ? <span>{whoopsie.description.message}</span>:null}
</Jumbotron>
        </form>
    )
}