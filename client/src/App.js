//import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
//import {Navbar} from "react-bootstrap";
import Navbar from "./components/NavBar"


const App = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <AppRouter/>
        </BrowserRouter>
    );
};
export default App;
