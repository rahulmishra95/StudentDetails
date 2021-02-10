import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './StudentDetailsForm.css';

 const StudentDetailsForm = (props) => {
  return (
    <React.Fragment>
      <form className = "studentDetailsForm" onSubmit={ props.handleFormSubmit}>
      <Typography variant="h3" gutterBottom>
        Student Details Form
      </Typography>
      <Grid container justify = "center" spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full name"
            value={props.newFullName}
            onChange={props.handleInputChange}
            fullWidth
            autoComplete="full-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="studentID"
            name="studentID"
            label="Student ID"
            value={props.newStudentID}
            onChange={props.handleInputChange}
            fullWidth
            autoComplete="student-id"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date Of Birth"
            value={props.newDateOfBirth}
            onChange={props.handleInputChange}
            fullWidth
            autoComplete="date-Of-Birth"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email ID"
            value={props.newEmail}
            onChange={props.handleInputChange}
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            value={props.newPhoneNumber}
            onChange={props.handleInputChange}
            fullWidth
            autoComplete="phone-number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={props.newGender} onChange={props.handleInputChange}>
              <span>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
              </span>              
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Course Applied For</FormLabel>
            <RadioGroup aria-label="course" name="course" value={props.newCourse} onChange={props.handleInputChange}>
              <span>
              <FormControlLabel value="react" control={<Radio />} label="React" />
              <FormControlLabel value="angular" control={<Radio />} label="Angular" />
              <FormControlLabel value="vue" control={<Radio />} label="Vue" />
              </span>              
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
      </form>      
    </React.Fragment>
  );
}

export default StudentDetailsForm;