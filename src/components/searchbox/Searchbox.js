import React from 'react';

function SearchBox(props) {
    return (
        <form
            className="form-inline justify-content-center">
            <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Search"
                name="search"
                onChange={props.handleInputChange}
            />
        </form>

    )
}

export default SearchBox;