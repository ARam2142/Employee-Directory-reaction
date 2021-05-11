const util = {
    searchEmployees: (value, rowArray) => {
        let searchedEmployee = rowArray.filter((row) => {
            return row.firstName.toLowerCase().includes(value.toLowerCase()) ||
            row.lastName.toLowerCase().includes(value.toLowerCase()) ||
            row.age.toNumber().includes(value.toLowerCase()) ||
            row.phone.toLowerCase().includes(value.toLowerCase()) ||
            row.email.toLowerCase().includes(value.toLowerCase())
        })
        return searchedEmployee;
    },
}

export { util }