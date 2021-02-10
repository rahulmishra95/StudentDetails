import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import Button from '@material-ui/core/Button';
import './StudentDetailsTable.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const DataTable = (props) => {
  const classes = useStyles();
  const rows = props.rows;

  return (
    <TableContainer className="studentDetailsTable" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date Of Birth</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Modify/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={`row-${i}`}>
              <TableCell component="th" scope="row">
                {row.studentID}
              </TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.dateOfBirth}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">
                <Button >
                  <EditSharpIcon onClick={() => props.handleEditEvent(i)}/>
                </Button>
                <Button>
                  <DeleteSharpIcon onClick={() => props.handleDeleteEvent(i)}/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;