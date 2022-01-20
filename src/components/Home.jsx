import React from "react";
import { Link } from "react-router-dom";
import logo from '/Users/veronica.lin/reactJS/hello-test/src/logo.svg';
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';

function Home(){
    return(
        <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
        <h2>Log In</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <label>UserId</label>
          <input className="in" type="text" placeholder="Enter your userid..."></input>
          <label>PassWord</label>
          <input className="in" type="text" placeholder="Enter your password..."></input>
          <nav>
                <Link className="App-link" to="/About">About</Link>
            </nav> 
          <button className="homebtn">Log In</button>
          <p>Not a member yet? Click here to <Link className="App-link" to="/SignUp">SignUp</Link></p>
        </header>
      </div>
    );
}
export default Home;