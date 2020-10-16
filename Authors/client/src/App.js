import React, {useState} from 'react';
import './App.css';
import Main from './views/Main';
import Add from './views/Add';
import {Router} from "@reach/router";
import Update from './views/Update'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/author/" />
        <Add path="/add/" />
        <Update path="/edit/:id/" />
      </Router>
    </div>
  );
}

export default App;
