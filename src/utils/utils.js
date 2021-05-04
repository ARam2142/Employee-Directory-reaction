//
const util = {
    searchEmployees: (value, rowArray) => {
        let searchedEmployee = rowArray.filter((row) => {
            return row.firstName.toLowerCase().includes(value.toLowerCase()) ||
            row.lastName.toLowerCase().includes(value.toLowerCase()) ||
            row.age.toLowerCase().includes(value.toLowerCase())
        })
        console.log(searchedEmployee)
        return searchedEmployee;
    },
}

export { util }