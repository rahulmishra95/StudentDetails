import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import StudentDetailsForm from './StudentDetailsForm/StudentDetailsForm';
import DataTable from './StudentDetailsTable/StudentDetailsTable';

class App extends Component {

  state = {
    studentID: '',
    fullName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    gender: '',
    course: '',
    editing: false,
    selectedIndex: null,
    rows: []
  }
  handleFormSubmit = (e) => {
    e.preventDefault();

    let rows = [...this.state.rows];
    
    rows.push({
      studentID: this.state.studentID,
      fullName: this.state.fullName,
      dateOfBirth: this.state.dateOfBirth,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      gender: this.state.gender,
      course: this.state.course
    });
    
    

    this.setState({
      rows,
      studentID: '',
      fullName: '',
      dateOfBirth: '',
      email: '',
      phoneNumber: '',
      gender: '',
      course: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  handleDeleteEvent = (i) => {
    const rows = this.state.rows;
    rows.splice(i, 1);
    this.setState({ rows });
  }

  handleEditEvent = (i) => {
     const rows = this.state.rows[i];
     this.setState({  
      editing: true, 
      selectedIndex: i,   
      studentID: rows.studentID,
      fullName: rows.fullName,
      dateOfBirth: rows.dateOfBirth,
      email: rows.email,
      phoneNumber: rows.phoneNumber,
      gender: rows.gender,
      course: rows.course
    });
    this.handleDeleteEvent(i);        
  }  

  render () {
    return (
      <div className="App">
        <Grid container>
          <Header />
          <Grid item xs={12} >
            <StudentDetailsForm 
            handleFormSubmit={ this.handleFormSubmit } 
            handleInputChange={ this.handleInputChange }
            newStudentID={ this.state.studentID }
            newFullName={ this.state.fullName }
            newDateOfBirth={ this.state.dateOfBirth }
            newEmail={ this.state.email }
            newPhoneNumber={ this.state.phoneNumber }
            newGender={ this.state.gender }
            newCourse={ this.state.course }/>
          </Grid>
          <Grid item xs={12}>
            <DataTable 
            rows={ this.state.rows } 
            handleDeleteEvent={this.handleDeleteEvent} 
            handleEditEvent={this.handleEditEvent}
            />
          </Grid>
        </Grid>        
      </div>
    );
  }  
}


export default App;


