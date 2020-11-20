import React, { Component } from 'react';

export default class Lifecycle extends Component {
  // Step - 1 (Mounting)
  constructor(props) {
    super(props);
    console.log(`'Lifecycle-Constructor'`);
    this.state = {
      test: 0,
    };
  }
  
  // Step - 2 (Mounting and Updating)
  static getDerivedStateFromProps(newProps, newState){
    console.log(`'Lifecycle-getDerivedStateFromProps', newProps.content = ${newProps.content}, newState.test = ${newState.test}`); 
    return newState;
  }

  // Step - 3 (Updating)
  shouldComponentUpdate(nextProps, nextState){
    console.log(`'Lifecycle-shouldComponentUpdate', newProps.content = ${nextProps.content}, newState.test = ${nextState.test}`); 
    console.log(`'Lifecycle-shouldComponentUpdate', oldProps.content = ${this.props.content}, oldState.test = ${this.state.test}`); 
    
    return nextState.test < 11;
  }

  // Step - 4 (Mounting and Updating)
  render() {
    console.log(`'Lifecycle-Render', test = ${this.state.test}`);
    return (
      <div>
        <h2 onClick={this.changeState}>{this.props.content} , test = {this.state.test}</h2>
      </div>
    );
  }

  // Step - 5 (Updating)
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(`'Lifecycle-getSnapshotBeforeUpdate', prevProps = ${prevProps}, prevState = ${prevState}`);
    console.log('prevState =>')
    console.table(prevState);
    console.log('prevProps =>')
    console.table(prevProps);
    
    return 'snapshot';
  }

  // Step - 6 (Mounting)
  componentDidMount(){
    console.log(`'Lifecycle-componentDidMount'`);
  }
  
  // Step - 6 (Updating)
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(`'Lifecycle-componentDidUpdate', prevProps = ${prevProps}, prevState = ${prevState}, snapshot = ${snapshot}`);
    console.log('prevState =>')
    console.table(prevState);
    console.log('prevProps =>')
    console.table(prevProps);
  }
  
  // Step - 6 (Unmounting)
  componentWillUnmount(){
    console.log(`'Lifecycle-componentWillUnmount'`);
  }


  changeState = () => {
    this.setState({ test: this.state.test + 1 });
  };
  
}
