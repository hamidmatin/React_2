import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom';

import Home from './home/Home';
import Users from './users/Users';
import Posts from './posts/Posts';

import './Blog.css';

export default class Blog extends Component {
    render() {
        return (
            <div className='blog-container'>
                <div className="side-navbar">
                    <NavLink to='/blog' exact>Home</NavLink>
                    <NavLink to='/blog/users'>Users</NavLink>
                    <NavLink to='/blog/posts'>Possts</NavLink>
                </div>
                <div className="blog-content">
                    <Route path='/blog' component={Home} exact/>
                    <Route path='/blog/users' component={Users} exact/>
                    <Route path='/blog/posts' component={Posts} exact/>
                </div>
            </div>
        )
    }
}
