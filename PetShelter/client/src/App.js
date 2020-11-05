import React from 'react';
import Main from './Views/Main';
import Detail from './Views/Detail'
import Edit from './Views/Edit';
import './App.css';
import { Router } from '@reach/router';
import PetAdd from './Views/PetAdd';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Edit path="/pets/:id/edit/"/>
        <Detail path="/pets/:id/"/>
        <Main path="/"/>
        <PetAdd path="pets/new/"/>
        </Router>
    </div>
  );
}

export default App;
