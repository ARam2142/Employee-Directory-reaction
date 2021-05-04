// import React, { Component } from 'react';
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
// import Searchbox from "../searchbox/Searchbox";
// import TableBody from '@material-ui/core/TableBody';
// import Table from '@material-ui/core/Table';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
// import { API } from '../../utils/API';
// import EmployeeTable from '../table/EmployeeTable';

//  const sortTab = {
//             up: {
//                 class: 'sort-up',
//                 fn: (a, b) => a.firstName - b.firstName
//             },
//             down: {
//                 class: 'sort-down',
//                 fn: (a, b) => b.firstName - a.firstName
//             }
//         }
// class EmployeeData extends Component {
//     // constructor(props) {
//     //     super(props)
//         state = {
//             rows: [
//                 {
//                     //employee: [],
//                     firstName: "Bob",
//                     lastName: "Smith",
//                     age: 34,
//                     email: "bob@bob.com",
//                     phoneNumber: "3456789087",
//                     imageUrl: ''
//                 }
//             ],
//         }
//     //};

//     //Query API for random user data and store in state
//     componentDidMount() {
//         API.getEmployees()
//             .then(res => {
//                 console.log(res.data.results[0]);
//                 let employeeData = res.data.results.map(employee => {
//                     return {
//                         //id: employee.id.value,
//                         firstName: employee.name.first,
//                         lastName: employee.name.last,
//                         age: employee.dob.age,
//                         email: employee.email,
//                         phoneNumber: employee.phone,
//                         imageUrl: employee.picture.medium,
//                     }
//                 });
//                 this.setState({ rows: employeeData })
//             })
//             .catch(err => console.log(err));
//     }

//     renderTable() {
//         return (
//             <EmployeeTable rows={this.state.row}/>
//         )
//     }



// }


// export default EmployeeData;