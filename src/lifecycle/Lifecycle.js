import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log('Constructor');
    this.state = {
      test: 0,
    };
  }
  componentWillUnmount() {
    console.log('componentWillUnmount', this.state.test);
  }
  componentDidMount() {
    console.log('componentDidMount', this.state.test);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.test);
  }

  
  changeState = () => {
    this.setState({ test: this.state.test + 1 });
  };
  render() {
    console.log('Render', this.state.test);
    return (
      <div>
        <h2 onClick={this.changeState}>Life Cycle Component</h2>
      </div>
    );
  }
}
