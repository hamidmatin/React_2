import React, { Component } from 'react';
import './Student.css';

export default class Student extends Component {
  render() {
    return (
      <div className='card'>
        <p>
          <span className='lable'>First Name :</span>
          <span className='data'>{this.props.firstName}</span>
        </p>
        <p>
          <span className='lable'>Last Name :</span>
          <span className='data'>{this.props.lastName}</span>
        </p>
        <button
          className='delete'
          // onClick={this.props.deleteStudentHandler.bind(this, this.props.id)}
          onClick={() => {
            this.props.deleteStudentHandler(this.props.id);
          }}
        >
          &times;
        </button>
      </div>
    );
  }
}
