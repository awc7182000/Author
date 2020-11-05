import React, {useState,useEffect} from 'react';
import {Link} from '@reach/router';
import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Mainlogo from './Mainlogo.png'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default(props) => {
    const[name,setName] = useState([]);
  
    useEffect(() => {
        getAllVolunteers();
    })
    const getAllVolunteers = () => {
        axios.get('http://localhost:8000/api/users/')
        .then(res => {
            setName(res.data.users)
        })

    }
    return(
        <div>
            <img class ="admin" src={Mainlogo} alt="logo"></img><br/>
            <ButtonGroup style={{borderColor:'#6a6d6d'}} size="lg" className="mb-2">
            <Link to="/admin/bubble/"><Button style={{backgroundColor:'#57c1cf',border:0}}>Bubble Blast</Button></Link>
            <Link to="/admin/golf/"><Button style={{backgroundColor:'#57b549',border:0}}>Golf Event</Button></Link>
    <Link to="/admin/annual/"><Button style={{backgroundColor:'#655a9f',border:0}}>Annual Event</Button></Link>
    <Link to="/admin/office/"><Button style={{backgroundColor:'#3e2e67',border:0}}>Office Admin</Button></Link>
    <Link to="/admin/kindness/"><Button style={{backgroundColor:'#fbbc00',border:0}}>Kindness courier</Button></Link>
    <Link to="/admin/fundraiser/"><Button style={{backgroundColor:'#bb368b',border:0}}>Fund raiser</Button></Link>
  </ButtonGroup>
    <h2 style={{marginTop:20}}>Volunteers for The Annual Event!</h2>
        </div>
    )
}