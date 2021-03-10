import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';




function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/league/:id">
            <LeagueDetail/>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
