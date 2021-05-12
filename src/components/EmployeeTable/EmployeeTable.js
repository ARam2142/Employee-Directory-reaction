import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

const EmployeeTable = (props) => {
debugger
    return (
        <TableContainer className="table-style" component={Paper}>
            <Table className="table" aria-label="Employee Table">
                {/* The header info for employee info */}
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ProfilePicture
                            <TableSortLabel active={props.orderBy === "ProfilePic"} onClick={() => props.sortHandler('ProfilePic', props.order)} direction={props.order}></TableSortLabel>
                        </TableCell>
                        <TableCell align="right">FirstName
                            <TableSortLabel active={props.orderBy === 'FirstName'} onClick={()=> props.sortHandler('FirstName', props.order)} direction={props.order}></TableSortLabel>
                                    
                        </TableCell>
                        <TableCell align="center">LastName
                                    {/* <button onclick={props.onSortChange}><i class="fas fa-arrow-up"></i></button> */}
                        </TableCell>
                        <TableCell align="center">Age
                        </TableCell>
                        <TableCell align="center">Email
                                    {/* <TableSortLabel></TableSortLabel> */}
                        </TableCell>
                        <TableCell align="center">PhoneNumber
                                    {/* <TableSortLabel /> */}
                        </TableCell>
                    </TableRow>
                </TableHead>

                {/* The info for displaying employee information */}
                <TableBody>
                    {props.rows.map((row) => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell><img src={row.img} alt="img"></img></TableCell>
                                <TableCell align="center">{row.firstName}</TableCell>
                                <TableCell align="center">{row.lastName}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                            </TableRow>
                        )

                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EmployeeTable

