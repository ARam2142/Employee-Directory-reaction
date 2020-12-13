import React from "react";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Table from "./components/Table/TableOutline";
//import { employeeTable } from "./components/Table"

const App = () => {
    return (
        <div className="container-fluid">
        <Hero />
           <Search />
           <Table/>
       </div>
    );
}

export default App;