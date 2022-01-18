import React from "react";
import { Link } from "react-router-dom";
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';
function About(){
    return(
        <div>
            <h1>About</h1>
            <div className="navmenu">
            <div className="leftb">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/About">About</Link>
                <Link className="item" to="/Profile">Profile</Link>
            </div>
            </div>
        </div>
    );
};
export default About;
