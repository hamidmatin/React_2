import React, { Component } from 'react';
import './StudentForm.css';

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    // const initialState = {
    //   id: 0,
    //   firstName: '',
    //   lastName: '',
    // };
    console.log('StudentForm', this.props.student);
    this.state = {
      student: this.props.student,
      isUpdating: false,
    };
  }

  componentDidUpdate() {
    if (!this.state.isUpdating && !this.props.student.isNew) {
      this.setState({
        student: this.props.student,
        isUpdating: !this.state.isUpdating,
      });
    }
  }

  // shouldComponentUpdate(prevProps, prevState){
  //   console.table(prevProps);
  //   console.table(this.props);
  //   return true;
  // }

  changeIdHandler = (e) => {
    const student = { ...this.state.student };
    student.id = parseInt(e.target.value);

    this.setState({ student: student });
  };

  changeFirstNameHandler = (e) => {
    console.log(e.target.value);

    const student = { ...this.state.student };
    student.firstName = e.target.value;

    this.setState({ student: student });
  };

  changeLastNameHandler = (e) => {
    const student = { ...this.state.student };
    student.lastName = e.target.value;

    this.setState({ student: student });
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.student);
    this.props.addStudentHandler(this.state.student);
    this.setState({ student: { firstName: '', lastName: '', id: 0 } });
  };

  render() {
    return (
      <div className='student-form'>
        <form onSubmit={this.submitForm}>
          <div>
            {/* <label for='firstName'>First Name :</label> */}
            <input
              id='id'
              type='Text'
              name='id'
              placeholder='Enter Student Id'
              value={this.state.student.id}
              onChange={this.changeIdHandler}
              disabled={this.state.isUpdating}
            />
          </div>
          <div>
            {/* <label for='firstName'>First Name :</label> */}
            <input
              id='firstName'
              type='Text'
              name='firstName'
              placeholder='Enter First Name'
              value={this.state.student.firstName}
              onChange={this.changeFirstNameHandler}
            />
          </div>
          <div>
            {/* <label for='lastname'>Last Name :</label> */}
            <input
              id='lastname'
              type='Text'
              name='lastName'
              placeholder='Enter Last Name'
              value={this.state.student.lastName}
              onChange={this.changeLastNameHandler}
            />
          </div>
          <div className='button-wapper'>
            <button className='add-student' type='submit'>
              {this.props.student.isNew ? 'Add Student' : 'Update Student'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
