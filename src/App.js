import React from 'react'
import './App.css'
import VueRandom from './Vues/VueRandom'
import VueListe from './Vues/VueListe'
import VueFav from './Vues/VueFav'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// function App() {

//   const vue = 0
//   return (
//     ({
//       0: <VueRandom/>,
//       1: <VueListe/>,
//       2: <VueFav/>
//     })[0]
//   );
// }

// export default App;

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Random</Link>
          </li>
          <li>
            <Link to="/liste">Liste</Link>
          </li>
          <li>
            <Link to="/fav">Fav</Link>
          </li>
        </ul>

        <hr />

        {}

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

    
  );
}


