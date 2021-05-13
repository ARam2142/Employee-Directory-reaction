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
//recieved help from mentor with doing tablesort label attributes
    return (
        <TableContainer className="table-style" component={Paper}>
            <Table className="table" aria-label="Employee Table">
                {/* The header info for employee info */}
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Profile Picture
                            <TableSortLabel active={props.orderBy === "ProfilePic"} onClick={() => props.sortHandler('img', props.order)} direction={props.order}></TableSortLabel>
                        </TableCell>
                        <TableCell align="center">First Name
                            <TableSortLabel active={props.orderBy === 'firstName'} onClick={()=> props.sortHandler('firstName', props.order)} direction={props.order}></TableSortLabel>
                                    
                        </TableCell>
                        <TableCell align="center">Last Name
                            <TableSortLabel active={props.orderBy === 'lastName'} onClick={()=> props.sortHandler('lastName', props.order)} direction={props.order}></TableSortLabel>

                        </TableCell>
                        <TableCell align="center">Age
                            <TableSortLabel active={props.orderBy === 'age'} onClick={()=> props.sortHandler('age', props.order)} direction={props.order}></TableSortLabel>

                        </TableCell>
                        <TableCell align="center">Email
                            <TableSortLabel active={props.orderBy === 'age'} onClick={()=> props.sortHandler('email', props.order)} direction={props.order}></TableSortLabel>

                        </TableCell>
                        <TableCell align="center">Phone Number
                            <TableSortLabel active={props.orderBy === 'phonenumber'} onClick={()=> props.sortHandler('phone', props.order)} direction={props.order}></TableSortLabel>

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

