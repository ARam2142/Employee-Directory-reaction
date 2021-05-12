const util = {

    searchEmployees: (value, rowArray) => {
        let searchedEmployee = rowArray.filter((row) => {
            return row.firstName.toLowerCase().includes(value.toLowerCase()) ||
                row.lastName.toLowerCase().includes(value.toLowerCase()) ||
                row.age.toString().includes(value.toString()) ||
                row.phone.toLowerCase().includes(value.toLowerCase()) ||
                row.email.toLowerCase().includes(value.toLowerCase())
        })
        return searchedEmployee;
    },

    compareValues(col, order = "asc") {
        //Use toUpperCase() to ignore character casing
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(col) || !b.hasOwnProperty(col)) {
                return 0;
            }

            const valA = (typeof a[col] === 'string') ? a[col].toUpperCase() : a[col];
            const valB = (typeof b[col] === 'string') ? b[col].toUpperCase() : b[col];

            let comparison = 0;
            if (valA > valB) {
                comparison = 1
            } else if (valA < valB) {
                comparison = -1

            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        }

    }
}

export { util }