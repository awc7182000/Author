import React from 'react';
import Signup from '../src/views/Signup';
import {Router} from '@reach/router';
import Login from '../src/views/Login'
import Logout from './views/Logout'
import Events from '../src/views/Events'
import Admin from '../src/views/Admin'
import Bubble from '../src/Components/Bubble'
import Golf from '../src/Components/Golf'
import Annual from '../src/Components/Annual'
import Kindness from '../src/Components/Kindness'
import Office from '../src/Components/Office'
import Fundraiser from '../src/Components/Fundraiser'
import VolunteerAnnual from '../src/Components/VolunteerAnnual'
import VolunteerBubble from '../src/Components/VolunteerBubble'
import VolunteerFundraiser from '../src/Components/VolunteerFundraiser'
import VolunteerGolf from '../src/Components/VolunteerGolf'
import VolunteerKindness from '../src/Components/VolunteerKindness'
import VolunteerOffice from '../src/Components/VolunteerOffice'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Events path="/events"/>
        <Login path="/login/"/>
        <Logout path="/main/"/> 
        <Admin path="/admin/"/>
        <Signup path="/"/>
        <Bubble path="/admin/bubble/"/>
        <Golf path="/admin/golf/"/>
        <Annual path="/admin/annual/"/>
        <Kindness path="/admin/kindness"/>
        <Office path="/admin/office"/>
        <Fundraiser path="/admin/fundraiser/"/>
        <VolunteerBubble path="/volunteer/bubble/"/>
        <VolunteerGolf path="/volunteer/golf/"/>
        <VolunteerAnnual path="/volunteer/annual/"/>
        <VolunteerKindness path="/volunteer/kindness/"/>
        <VolunteerOffice path="/volunteer/office/"/>
        <VolunteerFundraiser path="/volunteer/fundraiser/"/>
      </Router>
    </div>
  );
}

export default App;
