import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import NavBar from './navbar/Navbar';
import Home from './home/Home'
import About from './about/About'
import Blog from './blog/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
    </BrowserRouter>
  )
}
