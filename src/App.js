import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import { Home } from './pages/Home';
import About from "./pages/About"
import Error from './pages/Error';
import SingleCrypto from './pages/SingleCrypto';
import Navigation from "./Components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/crypto/:id">
          <SingleCrypto />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
