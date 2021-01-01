import React, { useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import NavBar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Blog from './blog/Blog';
import Login from './login/Login';
import HOC from './hoc/HOC';
import WidthLoading from './hoc/WithLoading';

export default function App() {
  const AboutWidthLoading = WidthLoading(About);

  const [isLoadingAbout, setIsLoadingAbout] = useState(true);
  setTimeout(() => {
    setIsLoadingAbout(false);
  }, 5000);

  const [loggedIn, setLoggedIn] = useState(false);

  const doLogin = () => {
    setLoggedIn(true);
  };
  const doLogout = () => {
    setLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <NavBar onLogout={doLogout} />

      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={Home} />
        <Route path='/hoc' component={HOC} />
        <Route path='/about'>
          <AboutWidthLoading isLoading={isLoadingAbout} />
        </Route>
        <Route path='/blog'>
          {loggedIn ? <Blog /> : <Login onLogin={doLogin} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
