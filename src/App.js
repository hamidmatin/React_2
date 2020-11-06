import React, { Component } from "react";
import Student from './student/Student';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          firstName: "Amin",
          lastName: "Mohammadi",
        },
        {
          firstName: "Baharak",
          lastName: "Asefi",
        },
        {
          firstName: "Hesam",
          lastName: "Azadi",
        },
        {
          firstName: "Shahrad",
          lastName: "Gholizadeh",
        },
        {
          firstName: "Mojtaba",
          lastName: "Khodakhah",
        },
        {
          firstName: "Milad",
          lastName: "Saremi",
        },
        {
          firstName: "Hadi",
          lastName: "Alizadeh",
        },
        {
          firstName: "Parisa",
          lastName: "Parsa",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <p>React course in MFT</p>
        <hr/>
        <div className="student-list">
            <Student firstName={this.state.students[0].firstName} 
                     lastName={this.state.students[0].lastName} />
            
            <Student firstName={this.state.students[1].firstName} 
                     lastName={this.state.students[1].lastName} />
            
            <Student firstName={this.state.students[2].firstName} 
                     lastName={this.state.students[2].lastName} />
            
            <Student firstName={this.state.students[3].firstName} 
                     lastName={this.state.students[3].lastName} />
            
            <Student firstName={this.state.students[4].firstName} 
                     lastName={this.state.students[4].lastName} />
            
            <Student firstName={this.state.students[5].firstName} 
                     lastName={this.state.students[5].lastName} />

            <Student firstName={this.state.students[6].firstName} 
                     lastName={this.state.students[6].lastName} />

            <Student firstName={this.state.students[7].firstName} 
                     lastName={this.state.students[7].lastName} />
            
        </div>
      </div>
    );
  }
}

export default App;
