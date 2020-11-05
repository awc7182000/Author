import React from 'react';
import {Link} from '@reach/router';
import PetList from '../Components/PetList';
export default(props) => {
    return(
        <div>
            <Link class= "toplink" to="/pets/new/">Add a pet to the shelter</Link>
            <h2>These pets are looking for a good home</h2>
            <PetList />
        </div>
    )

}