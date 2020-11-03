import React from "react";
//import "./styles.css";

function Search(props) {
    return (
        <form class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Search"></input>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default Search;