import React from "react";
//import Grid from '@material-ui/core/Grid';
import "./Header.css";

function Header() {
    return (
        <div>
            <header className="bg-dark text-white justify-content-center">
                <h1>Welcome to the Employee Directory</h1>
                <p className="text-center">Search for an employee</p>
            </header>
        </div> 
    )
}

export default Header;
