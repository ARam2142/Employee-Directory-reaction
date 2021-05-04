import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Searchbox from "./components/searchbox/Searchbox";
import EmployeeTable from "./components/table/EmployeeTable";
//import Data from "./components/data/EmployeeData";

const App = () => {
    return (
        <div>
            <Header />
            <Searchbox />
            <EmployeeTable />
            <Footer />
        </div>
    );
}

export default App;