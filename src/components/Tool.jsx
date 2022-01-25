import React from "react";
import { Link } from "react-router-dom";
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';

function Navbar(props){
    return(
        <>
        <header className="page">
            <h1 className="headTitle">{props.name}</h1>
        </header>
            <div>
                <div className="navmenu">
                    <div className="leftb">
                        <Link className="item" to="/">Home</Link>
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
                    </div>
                    <div className="rightb">
                        <Link className="item" to="/">LogOut</Link>
                        <Link className="item" to="/SignUp">SignUp</Link>
                        <input className="search" type="text" placeholder="search..."></input>
                        <button className="searchbtn" type="submit">Search</button>
                    </div>
                </div>
            </div>
            </>
    );
}
function Footer(){
   return(
    <footer>
      <p>Today is {new Date().toLocaleDateString()}</p>
      <span className="material-icons">emoji_nature</span>
      Wish you have a good day :) -Veronica.lin
    </footer>
    );
}
export { Navbar, Footer };


