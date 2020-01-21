import React from 'react';
import './App.css';
import Random from './Containers/Random'
import Liste from "./Containers/Liste";
import {
    BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch
} from "react-router-dom"
import View from "./Containers/View";
import Favoris from "./Containers/Favoris";

class App extends React.Component {
    constructor(props) {
        super(props);
        localStorage.setItem('Favori', JSON.stringify([]))
    }
  render() {
      return (
          <div className="App">
              <Router>
                  <ul>
                      <li>
                          <Link to="/fav">favoris</Link>
                      </li>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/liste">Liste</Link>
                      </li>
                  </ul>

                  <Switch>
                      <Route exact path="/" component={Random}>
                          <Random />
                      </Route>
                      <Route path="/liste">
                          <Liste store={this.props.store} />
                      </Route>
                      <Route path="/view/:id" component={View} />
                      <Route path="/fav" >
                          <Favoris store={this.props.store}/>
                      </Route>
                  </Switch>
              </Router>
          </div>
      )
  }
}

export default App;
