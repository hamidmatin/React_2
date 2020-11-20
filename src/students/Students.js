import React, { Component } from 'react';
import Student from './student/Student';
import StudentForm from './student/StudentForm';

import './Students.css';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          id: 1,
          firstName: 'Amin',
          lastName: 'Mohammadi',
        },
        {
          id: 2,
          firstName: 'Baharak',
          lastName: 'Asefi',
        },
        {
          id: 3,
          firstName: 'Hesam',
          lastName: 'Azadi',
        },
        {
          id: 4,
          firstName: 'Shahrad',
          lastName: 'Gholizadeh',
        },
        {
          id: 5,
          firstName: 'Mojtaba',
          lastName: 'Khodakhah',
        },
        {
          id: 6,
          firstName: 'Milad',
          lastName: 'Saremi',
        },
        {
          id: 7,
          firstName: 'Hadi',
          lastName: 'Alizadeh',
        },
        {
          id: 8,
          firstName: 'Parisa',
          lastName: 'Parsa',
        },
      ],
      studentForm: {
        id: 0,
        firstName: '',
        lastName: '',
        isNew: true
      },
    };
  }
  deleteStudent = (stdID) => {
    console.log(stdID);
    const students = [...this.state.students];

    const newStudents = students.filter((student) => {
      return student.id !== stdID;
    });

    console.log(newStudents);

    this.setState({ students: newStudents });
  };

  addStudent = (student) => {
    const students = [...this.state.students];
    
    const  {id, firstName, lastName} = student;
    const newStudent = {id, firstName, lastName};
    
    if(student.isNew){
      students.push(newStudent);
    }
    else{
      const index = students.findIndex((st)=>st.id === newStudent.id);
      students[index] = newStudent;
    }

    this.setState({ students: students });
  };

  editStudent = (stdID) => {
    console.log(stdID);

    const student = this.state.students.find((student) => student.id === stdID);

    console.log(student);

    this.setState({studentForm: {...student, isNew: false}});
  };

  render() {
    let studentList = <p className='list-empty'>Student list is empty.</p>;

    if (this.state.students.length > 0) {
      studentList = this.state.students.map((student) => {
        console.log(student);
        return (
          <Student
            key={student.id}
            id={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
            deleteStudentHandler={this.deleteStudent}
            editStudentHandler={this.editStudent}
          />
        );
      });
    }
    return (
      <div>
        <StudentForm student={this.state.studentForm} addStudentHandler={this.addStudent} />
        <hr />
        <div className='student-list'>{studentList}</div>
      </div>
    );
  }
}
