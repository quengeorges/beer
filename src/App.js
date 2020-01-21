import React from 'react'
import './App.css'
import VueRandom from './Vues/VueRandom'
import VueListe from './Vues/VueListe'
import VueFav from './Vues/VueFav'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={false}
            indicatorColor="primary"
            textColor="primary"
            centered
            component="div"
          >
            <Tab label="Random" component={Link} to='/' value="/"/>
            <Tab label="Liste" component={Link} to='/liste' valu='/liste'/>
            <Tab label="Favoris" component={Link} to='/fav' value='/fav'/>
          </Tabs>
        </Paper>

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


