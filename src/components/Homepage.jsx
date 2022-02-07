import React from "react";
import {Footer} from "./Tool";
import { Link } from "react-router-dom";
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';

function HomePage(){
    return(
        <>
        <div className="App">
        <header className="App-header">
        <h1>Welcome</h1>
        <Link className="item" to="/About">About</Link>
        <Link className="item" to="/Profile">Profile</Link>
        <div className="dropdown">
            <Link className="dropdown-list" to="">MySchool</Link>
            <div className="dropdown-content">
                <Link className="itemd" to="/Junior">Junior</Link>
                <Link className="itemd" to="/Senior">Senior</Link>
                <Link className="itemd" to="/University">University</Link>
            </div>
        </div> 
        </header>
        <Footer />
        </div>
        </>
    );
}
export default HomePage;