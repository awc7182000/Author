import React, {useEffect, useState} from 'react';
import {Link,navigate} from '@reach/router';
import PetForm from '../Components/PetForm'
import axios from 'axios';
export default props => {
    const{id} = props;
    const [pets,setPets] = useState({});
    const [loaded,setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' +id)
            .then(res =>  {
                setPets(res.data.user);
                setLoaded(true);
                console.log(pets);
            })
    },[])
    const updateAnimal = p => {
        axios.put('http://localhost:8000/api/users/update/' + id, p )
            .then(res =>{ console.log(res)
            navigate("/")});
    }
    return(
        <div>
            <h2>Edit: {pets.name} </h2>
            
            <PetForm onSubmitProp= {updateAnimal}
            initialName={pets.name}
            initialType={pets.type}
            initialDescription={pets.description}
            initialFirst={pets.first}
            initialSecond={pets.second}
            initialThird={pets.third}
            />

            
        </div>
    )
}