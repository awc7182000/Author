import React, {useEffect, useState} from 'react';
import {Link,navigate} from '@reach/router';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from 'axios';
export default props => {
    const {initialName, initialType,initialDescription,initialFirst,initialSecond,initialThird,onSubmitProp} = props;
    const[name,setName] = useState("");
    const[type,setType] = useState("");
    const[description,setDescription] = useState("");
    const[first,setFirst] = useState("");
    const[second,setSecond] = useState("");
    const[third,setThird] = useState("");
    const{id} =props;

    useEffect(() => {
        console.log(props);
        setName(initialName);
        setType(initialType);
        setDescription(initialDescription);
        setFirst(initialFirst);
        setSecond(initialSecond);
        setThird(initialThird);
    },[]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name,type,description,first,second,third});
        console.log(name,type);
        
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <Link class="toplink"to="/">Back to home</Link>
            <br/>
        <Jumbotron fluid>
        <container>
            <label>Pet Name:</label><label>Skill 1:</label>
            <br/>
            <input type="text" defaultValue={initialName}onChange ={e =>setName(e.target.value)}></input><input type="text" defaultValue={initialFirst}onChange ={e =>setFirst(e.target.value)}></input>
            <br/>
            <label>Pet Type:</label><label>Skill 2:</label>
            <br/>
            <input type="text" defaultValue={initialType}onChange ={e =>setType(e.target.value)}></input><input type="text" defaultValue={initialSecond}onChange ={e =>setSecond(e.target.value)}></input>
            <br/>
            <label>Pet Description:</label><label>Skill 3:</label>
            <br/>
            <input type="text" defaultValue={initialDescription}onChange ={e =>setDescription(e.target.value)}></input><input type="text" defaultValue={initialThird}onChange ={e =>setThird(e.target.value)}></input>
            <br/>
            <input type="submit"value="Edit Pet"></input>
        </container>
        </Jumbotron>
        </form>
    )
}