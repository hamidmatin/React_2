import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    //   this.userDetail = this.props.match.params.id;
    axios
      .get(
        'https://jsonplaceholder.typicode.com/users/' +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ user: response.data });
      });
  }
  render() {
    return (
      <>
        {this.state.user === null ? (
          <p>Loading Data</p>
        ) : (
          <React.Fragment>
            <h2>{this.state.user.name}</h2>
            <p>{this.state.user.username}</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.phone}</p>
            <p>
              <a href={`http://${this.state.user.website}`} target='_blank'>
                {this.state.user.website}
              </a>
            </p>
            <p>Company Name : {this.state.user.company.name}</p>
          </React.Fragment>
        )}
      </>
    );
  }
}
