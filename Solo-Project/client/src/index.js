import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const domain= "dev-ra5j-ial.us.auth0.com";
const clientId = "cdcd3FbdmZFzDJQdvJJ6JzNADeu9WHkP";

ReactDOM.render(
  <Auth0Provider domain={domain}clientId={clientId}redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

