import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './about/About';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/dashboard'>
            Dashboard
          </Link>
          <Link className='nav-link' to='/about'>
            About
          </Link>

          <Switch>
            {/* <Route path='/' exact >
              <Home />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
            <Route path='/about'>
              <About />
            </Route> */}

            <Route path='/' exact component={Home} />
              
            <Route path='/dashboard' component={Dashboard} />

            <Route path='/about' component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
