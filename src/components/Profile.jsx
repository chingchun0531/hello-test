import React from "react";
import { Link } from "react-router-dom";
function Profile(){
    return(
        <div>
            <h1>Profile</h1>
            <nav>
                <Link className="App-link" to="/">Home</Link>
                <Link className="App-link" to="/About" style={{marginLeft:"20px"}}>About</Link>
                <Link className="App-link" to="/Profile" style={{marginLeft:"20px"}}>Profile</Link>
            </nav> 
        </div>
    );
};
export default Profile;