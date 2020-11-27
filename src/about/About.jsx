import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
export default class About extends Component {
    constructor(props){
        super(props)
        console.log('About')
    }
    render() {
        
        return (
            <div>
                <h1>About Us</h1>
                <ul>
                    <li><Link to='/about/map'>Map</Link></li>
                    <li><Link to='/about/address'>Address</Link></li>
                </ul>
                <Route path='/about/map'>
                    <Map/>
                </Route>
                <Route path='/about/address'>
                    <Address />
                </Route>
            </div>
        )
    }
}

function Map(){
    return (
        <h2>Map</h2>
    )
}
function Address(){
    return (
        <h2>Address</h2>
    )
}