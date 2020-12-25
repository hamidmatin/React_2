import React, { Component } from 'react';
import User from './user/User';
import { connect } from 'react-redux';
import { addUser, loadAllUsers, testAction } from '../../redux/actions';

class Users extends Component {
  clickHandler = () => {
    // this.props.test();
    this.props.addUser({
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    });
};

componentDidMount(){
      this.props.loadAllUsers();
  }
  render() {
    //   console.log(this.props.users)
    return (
      <div className='container'>
        {this.props.users.length === 0 ? (
          <p>List is Empty</p>
        ) : (
          <div className='row'>
            <button onClick={this.clickHandler}>Click Me</button>
            {this.props.users.map((user) => (
              <User
                key={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    console.log('USERS', state)
  return state;
};

const mapActionsToProps = (dispatch) => {
  return {
    test: () => {
      dispatch(testAction());
    },
    addUser: (user) => {
      dispatch(addUser(user));
    },
    loadAllUsers: ()=>{
        dispatch(loadAllUsers())
    }
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Users);
