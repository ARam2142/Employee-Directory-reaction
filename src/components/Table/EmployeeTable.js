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
//import { util } from '../../utils/uti'

class EmployeeTable extends Component {
    state = {
        rows: [
            {
                // employees: [],
                // search: "",
                // sortDirection: "",
                // col: ""
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
                })
                this.setState({
                    rows: employeeData
                })
            })
            .catch(err => console.log(err));
    }

    handleSearchChange = e => {
        this.setState({ rows: e.target.value });
    }

    filterEmployees() {
        const rows = this.state.rows.toLowerCase();
        //console.log(rows);
        return this.state.employees.filter(employee => {
            return (
                employee.firstName.toLowerCase().includes(rows) ||
                employee.lastName.toLowerCase().includes(rows)
                //employee.age.toLowerCase().includes(rows)

            )
        })
    }

    // renderEmployees() {
    //     return this.filteredEmployees()
    //         .sort(this.sortEmployees)
    //         .map((row, index) => {
    //             return (
    //                 <TableRow key={index}>
    //                     <TableCell>
    //                         <TableCell><img src={row.imageUrl} alt="img"></img></TableCell>
    //                         <TableCell align="center">{row.firstName}</TableCell>
    //                         <TableCell align="center">{row.lastName}</TableCell>
    //                         <TableCell align="center">{row.age}</TableCell>
    //                         <TableCell align="center">{row.email}</TableCell>
    //                         <TableCell align="center">{row.phoneNumber}</TableCell>
    //                     </TableCell>
    //                 </TableRow>
    //             )
    //         })
    // }

    renderSort() {
        //const newRows = Array.from(this.state.);

        // renderSort
        // set STate
    }



    //function EmployeeTable(rows) {

    //rendering table content
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
                            <TableCell align="center">LastName
                                <TableSortLabel></TableSortLabel>
                            </TableCell>
                            <TableCell align="center">Age
                                <TableSortLabel></TableSortLabel>
                            </TableCell>
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