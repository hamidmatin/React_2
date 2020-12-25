import React, { Component } from 'react'
import WithLoading from '../hoc/WithLoading';
import Users from './users/Users';

const UsersWithLoading = WithLoading(Users);
 class Blog extends Component {
     constructor(){
         super();
         this.state={
             isLoading: true
         }
     }
     componentDidMount(){
         this.setState({isLoading: false})
     }
    render() {
        return (
            <UsersWithLoading isLoading={this.state.isLoading}/>
        )
    }
}

export default Blog;