import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import { Home } from './pages/Home';
import About from "./pages/About"
import Error from './pages/Error';
import SingleCrypto from './pages/SingleCrypto';
import Navigation from "./Components/Navigation";
import { Favourite } from './pages/Favourite';
import PrivateRoute from './pages/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
    <AuthWrapper>

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path='/crypto/:id'
            render={(props) => (
              <SingleCrypto{...props.location.state} />
            )}
          />
          <PrivateRoute path="/fave">
            <Favourite />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>

      </Router>
    </AuthWrapper>
  );
}

export default App;
