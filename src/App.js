import React, {useState} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import NavBar from './navbar/Navbar';
import Home from './home/Home'
import About from './about/About'
import Blog from './blog/Blog';
import Login from './login/Login';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const doLogin = ()=>{
    setLoggedIn(true);
  }
  const doLogout = ()=>{
    setLoggedIn(false);
  }
  return (
    <BrowserRouter>
      <NavBar onLogout={doLogout}/>
      
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/blog' >
          {loggedIn? <Blog/>: <Login onLogin={doLogin}/>}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
