import React, { useState } from 'react';
import {Link, navigate} from '@reach/router'
export default props => {
    const[author, setAuthor] = useState("");

    const onSubmitHandler = () => {
        var name = (author == "") ? props.initialValue : author;
        props.sendData(name)
        navigate('/author/')
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <h1>Favorite Authors!</h1>
            <p>
                <Link to="/author/">Home</Link><br />
                <label>{props.infoLabel}</label> <br />
                <input type="text" defaultValue = {props.initialValue} onChange={e=>setAuthor(e.target.value)} />
                <br /><Link to="/author/"><button>Cancel</button></Link>
                <input type="submit" />
            </p>
        </form>
    )
}