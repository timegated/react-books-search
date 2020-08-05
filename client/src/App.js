import React from 'react';
import Nav from './components/Nav/Nav';
import Search from './pages/Search/Search';
import Saved from './pages/SavedBook/SavedBook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
    <div className="main-content">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
      </div>
      </Router>      
    );  
}

export default App;
