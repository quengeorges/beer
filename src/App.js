import React from 'react'
import './App.css'
import VueRandom from './Vues/VueRandom'
import VueListe from './Vues/VueListe'
import VueFav from './Vues/VueFav'

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import Store from './_store/configureStore'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (

      <Provider store={Store}>

        <Router>

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand>Beer</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to={"/"}>Random</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/liste"}>Liste</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/fav"}>fav</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <div style={{padding: 20}}>
            <Switch>
              <Route exact path="/">
                <VueRandom />
              </Route>
              <Route path="/liste">
                <VueListe />
              </Route>
              <Route path="/fav">
                <VueFav />
              </Route>
            </Switch>
          </div>
        </Router>

      </Provider>

  );
}


