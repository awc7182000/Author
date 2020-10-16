import React from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'
export default props =>{
    const {id} = props;

    const add = name => {
        axios.post('http://localhost:8000/api/users/new', {name: name})
            .then(() =>{
            });
    }

    const getData = name =>{
        add(name);
    }
    return(
        <div>
            <AuthorForm sendData={getData} infoLabel="Add an author:" />
        </div>
    )
}