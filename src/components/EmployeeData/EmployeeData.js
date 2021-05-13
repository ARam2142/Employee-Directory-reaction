import React, { Component } from 'react';
import SearchBox from "../SearchBox/SearchBox";
import { API } from '../../utils/API';
import { util } from '../../utils/util';
import EmployeeTable from "../EmployeeTable/EmployeeTable";
//debugger
class EmployeeData extends Component {
    
    state = {
        rows: [],
        rowsLoaded: [],
        search: "",
        orderBy: "",
        order: "asc"
    };

    //API to get employee data
    componentDidMount() {
        API.getEmployees()
            .then(res => {
                let employeeData = res.data.results.map(employee => {
                    return {
                        id: employee.id.value,
                        img: employee.picture.medium,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        age: employee.dob.age,
                        email: employee.email,
                        phone: employee.phone
                    }
                })
                this.setState({
                    rows: employeeData,
                    rowsLoaded: employeeData
                })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
    // e.preventDefault()
    const value = e.target.value;
    const name = e.target.name;
    
        this.setState({
            [name]: value
        }, () => {
            //filter employees
            if (this.state.search) {
                let resultsArr = util.searchEmployees(this.state.search, this.state.rowsLoaded);
                this.setState({
                    rows: resultsArr,
                    orderBy: ""
                })
            } else {
                this.setState({
                    rows: this.state.rowsLoaded,
                    orderBy: ""
                })
            }
        });
    };

    //code taken from ASheikh-io and modified to my style
    sortHandler = (col, order) => { 
        //debugger
        let dataList = [...this.state.rows].sort(util.compareValues(col, order));
        let renderedList = order === 'asc' ? 'desc' : 'asc';
        this.setState({
            rows: dataList,
            orderBy: col,
            order: renderedList
        })
       

    }

    render() {
        return (
            <div>
                <SearchBox row={this.state.rows} handleInputChange={this.handleInputChange} />
                <EmployeeTable
                    rows={this.state.rows}
                    orderBy={this.state.orderBy}
                    order={this.state.order}
                    sortHandler={this.sortHandler}
                />
            </div>
        );

    }
}

export default EmployeeData;
