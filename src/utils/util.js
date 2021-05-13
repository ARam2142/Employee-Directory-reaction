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

    // object sorting function from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    compareValues(key, order = "asc") {
        //Use toUpperCase() to ignore character casing
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return 0;
            }

            const valA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            const valB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

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