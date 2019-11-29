import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1>AboutPage</h1>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>ContactPage</h1>
    </div>
  )
}

const App =() => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
