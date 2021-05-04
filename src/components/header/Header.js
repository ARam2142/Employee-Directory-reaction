import React from "react";
import "./Header.css";

function Header() {
    return (
        <div>
            <header className="bg-dark text-white justify-content-center">
                <h1>Welcome to the Employee Directory</h1>
                <p className="text-center">Search for an employee down below</p>
            </header>
        </div> 
    )
}

export default Header;
