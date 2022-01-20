import React from "react";
import { Link } from "react-router-dom";
import logo from '/Users/veronica.lin/reactJS/hello-test/src/logo.svg';
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';

function Home(props){
    return(
        <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
        <h2>Log In</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <label>UserId</label>
          <input className="in" type="text" placeholder="Enter your userid..."></input>
          <br/>
          <label>PassWord</label>
          <input className="in" type="text" placeholder="Enter your password..."></input>
          <p>
            Welcome <code>{props.name}</code> .
          </p>
          <nav>
                <Link className="App-link" to="/About" style={{marginLeft:"20px"}}>About</Link>
                <Link className="App-link" to="/Profile" style={{marginLeft:"20px"}}>Profile</Link>
            </nav> 
          <button className="homebtn">LogIn</button>
          <p>Not a member yet? Click here to <Link className="App-link" to="/">SignUp</Link></p>
        </header>
      </div>
    );
}
export default Home;