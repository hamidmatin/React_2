import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './about/About';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import Students from './students/Students';
import Blog from './blog/Blog'

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
          <Link className='nav-link' to='/students'>
            Students
          </Link>
          <Link className='nav-link' to='/blog'>
            Blog
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

            <Route path='/students' component={Students} />
            <Route path='/blog' component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
