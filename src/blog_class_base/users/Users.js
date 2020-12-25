import React, { Component } from 'react';
import User from './user/User';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    return (
      <div className='container'>
        {this.props.users.length === 0 ? (
          <p>List is Empty</p>
        ) : (
            <div className='row'>
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
  return state;
};
export default connect(mapStateToProps)(Users);
