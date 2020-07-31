import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover';
import PopularBattle from './components/PopularBattle';
import MyList from './components/MyList';
import Popular from './components/Popular';
import DiscoverBattle from './components/DiscoverBattle';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Discover />
            </Route>
            <Route path="/battle">
              <DiscoverBattle />
            </Route>
            <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
