import React, { Component } from 'react';
import Student from './student/Student';
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
  render() {
    return (
      <div>
        <div className='student-list'>
          {this.state.students.map((student) => {
            console.log(student);
            return (
              <Student
                key={student.id}
                id={student.id}
                firstName={student.firstName}
                lastName={student.lastName}
                deleteStudentHandler={this.deleteStudent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
