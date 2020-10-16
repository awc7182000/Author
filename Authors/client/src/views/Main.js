import React from 'react'
import AuthorList from '../components/AuthorList';
import {Link} from '@reach/router'
export default (props) => {
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/add/">Add a new author</Link>
            <h3>we have quotes by:</h3>
            <table id='Table'>
                <h3>Authors</h3><h3>Actions</h3>
            <tbody><AuthorList /></tbody>
            </table>
            
        </div>
    )
}
