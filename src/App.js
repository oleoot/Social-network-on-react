import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import News from './components/News'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";




function App() {
  const [friends, addFriend] = useState(false)





  return (
    <div className="App">
      <Router>
        <div className="header">
          <div className="container">
            <nav className="nav">
              <ul>
                <NavLink to="/">Профиль</NavLink>
                <NavLink to="/news">Новости</NavLink>
              </ul>
            </nav>
          </div>
        </div>
        <Switch>
          <Route exact path="/"><Profile updateFriend={addFriend} friends={friends} /></Route>
          <Route exact path="/news"><News /></Route>

        </Switch>
      </Router>
    </div >
  );
}

export default App;
