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
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/InputGroup'
import Alert from 'react-bootstrap/Alert'
export default (props) => {
    const[checked1,setChecked1] = React.useState(false);
    const[checked2,setChecked2] = React.useState(false);
    const[checked3,setChecked3] = React.useState(false);
    const[checked4,setChecked4] = React.useState(false);
    const[checked5,setChecked5] = React.useState(false);
    
    
    const planningCommitee = () => {
      setChecked1((prev) => !prev);
    };
    
    const weekBefore = () => {
      setChecked2((prev) => !prev);
    };
  
    const dayOf = () => {
      setChecked3((prev) => !prev);
    };

    const event = () => {
      setChecked4((prev) => !prev);
    };

    const child = () => {
      setChecked5((prev) => !prev);
    };

    return(
        <div>
            <img class ="admin" src={Mainlogo} alt="logo"></img>
            <Link className="adminLogin"to="/events/">Go back</Link><br/>
            <ButtonGroup style={{borderColor:'#6a6d6d',height:20}} size="lg" className="mb-2">
            <Link to="/volunteer/bubble/"><Button style={{backgroundColor:'#57c1cf',border:0}}>Bubble Blast</Button></Link>
            <Link to="/volunteer/golf/"><Button style={{backgroundColor:'#57b549',border:0}}>Golf Event</Button></Link>
    <Link to="/volunteer/annual/"><Button style={{backgroundColor:'#655a9f',border:0}}>Annual Event</Button></Link>
    <Link to="/volunteer/office/"><Button style={{backgroundColor:'#3e2e67',border:0}}>Office Admin</Button></Link>
    <Link to="/volunteer/kindness/"><Button style={{backgroundColor:'#fbbc00',border:0}}>Kindness courier</Button></Link>
    <Link to="/volunteer/fundraiser/"><Button style={{backgroundColor:'#bb368b',border:0}}>Fund raiser</Button></Link>
  </ButtonGroup>
    <h2 style={{marginTop:20}}>What kind of jobs would you like to do for the Annual Event?</h2>
    <FormGroup class="switch">
  <FormControlLabel style={{display:"block"}}
    control={<Switch checked={checked1} onChange={planningCommitee} />}
    label="Planning committee"
  />
  <FormControlLabel style={{display:"block"}}
    control={<Switch checked={checked2} onChange={weekBefore} />}
    label="Sponsorship Solicitation"
  />
  <FormControlLabel style={{display:"block"}}
    control={<Switch checked={checked3} onChange={dayOf} />}
    label="Solicit Item Donations"
  />
  <FormControlLabel style={{display:"block"}}
    control={<Switch checked={checked4} onChange={event} />}
    label="Event set-up/tear down"
  />
  <FormControlLabel style={{display:"block"}}
    control={<Switch checked={checked5} onChange={child} />}
    label="Event day volunteer"
  />
</FormGroup>
<div>
<InputGroup className="add">
    <InputGroup.Prepend>
      <InputGroup.Text className="add">Anything to add?</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl className="text" as="textarea" aria-label="With textarea" />
  </InputGroup></div>
  <input style={{marginTop:20}} type="submit"></input>
  <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
        </div>
    )
}