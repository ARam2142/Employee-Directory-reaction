import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import Searchbox from "./components/SearchBox/Searchbox";
import EmployeeData from "./components/EmployeeData/EmployeeData";

const App = () => {
    return (
        <div>
            <Header />
            <EmployeeData />
            <Footer />
        </div>
    );
}

export default App;