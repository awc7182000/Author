import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm'
export default props =>{
    const [author, setAuthor] = useState("")
    const {id} = props;

    useEffect(()=>{
        getName();
        }
    ,[]);

    const edit = name => {
        axios.put('http://localhost:8000/api/users/update/' + id, {name: name})
            .then(() =>{
            });
    }

    const getData = name =>{
        edit(name);
    }

    const getName = () =>{
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res =>{
                setAuthor(res.data.user.name);
            })
            
    }
    return(
        <div>
            <AuthorForm initialValue={author} sendData={getData} infoLabel="Update an author:" />
        </div>
    )
}