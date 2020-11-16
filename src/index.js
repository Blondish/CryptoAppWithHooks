import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AllCryptoProvider } from "./Context"
import { Auth0Provider } from '@auth0/auth0-react';

//domain dev--xpj30cq.eu.auth0.com
//client ID NTTTU2V8XA3eQ9frP7T2fU51Fnf7QBJx

ReactDOM.render(
  <Auth0Provider
    domain="dev--xpj30cq.eu.auth0.com"
    clientId="NTTTU2V8XA3eQ9frP7T2fU51Fnf7QBJx"
    redirectUri={window.location.origin}
  >
    <AllCryptoProvider>
      <App />
    </AllCryptoProvider>
  </Auth0Provider>,

  document.getElementById('root')
);


serviceWorker.unregister();
