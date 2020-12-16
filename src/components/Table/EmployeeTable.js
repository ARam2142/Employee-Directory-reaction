import React, { Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { API } from '../../utils/API';

class EmployeeTable extends Component {
        state = {
            rows: [
                {
                    firstName: "Bob",
                    lastName: "Smith",
                    age: 34,
                    email: "bob@bob.com",
                    phoneNumber: "3456789087",
                    imageUrl: ''
                }
            ],
        }

    //Query API for random user data and store in state
    componentDidMount() {
        API.getEmployees()
            .then(res => {
                console.log(res.data.results[0]);
                let employeeData = res.data.results.map(employee => {
                    return {
                        //id: employee.id.value,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        age: employee.dob.age,
                        email: employee.email,
                        phoneNumber: employee.phone,
                        imageUrl: employee.picture.medium,
                    }
                });
                this.setState({
                    rows: employeeData
                })
            })
            .catch(err => console.log(err));
    }

    renderSort() {
        //const newRows = Array.from(this.state.employees);
        // renderSort
        // set STate
    }

//function EmployeeTable(rows) {

    render(props) {
        return (
            <TableContainer className="table-style" component={Paper}>
                <Table className="table" aria-label="Employee Table">
    
                    {/* The header info for employee info */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Profile Picture</TableCell>
                            <TableCell align="center">FirstName
                                <TableSortLabel></TableSortLabel>
                            </TableCell>
                            <TableCell align="center">LastName</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">PhoneNumber</TableCell>
                        </TableRow>
                    </TableHead>
    
                    {/* The info for displaying employee information */}
                    <TableBody>
                    {this.state.rows.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell><img src={row.imageUrl} alt="img"></img></TableCell>
                                    <TableCell align="center">{row.firstName}</TableCell>
                                    <TableCell align="center">{row.lastName}</TableCell>
                                    <TableCell align="center">{row.age}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.phoneNumber}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}



//}



export default EmployeeTable;