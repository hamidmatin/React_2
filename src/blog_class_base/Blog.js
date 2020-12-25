import React, { Component } from 'react'
import WithLoading from '../hoc/WithLoading';
import Users from './users/Users';
import { connect} from 'react-redux';

import { loadAllUsers } from '../redux/actions';

const UsersWithLoading = WithLoading(Users);
 class Blog extends Component {
     constructor(){
         super();
         this.state={
             isLoading: true
         }
     }
     componentDidMount(){
        //  this.props.loadAllUsers();
         this.setState({isLoading: false})
     }
    render() {
        return (
            <UsersWithLoading isLoading={this.state.isLoading}/>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log('Blog',state)
    return state;
}
const mapActionsToProps = (dispatch)=>{
    
    return {
        loadAllUsers: ()=>{
            dispatch(loadAllUsers())
        }
    };
}
export default connect(mapStateToProps, mapActionsToProps) (Blog);