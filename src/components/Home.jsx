import React from "react";
import { Link } from "react-router-dom";
import logo from '/Users/veronica.lin/reactJS/hello-test/src/logo.svg';
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';

function Home(props){
    return(
        <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome <code>{props.name}</code> .
          </p>
          <nav>
                <Link className="App-link" to="/">Home</Link>
                <Link className="App-link" to="/About" style={{marginLeft:"20px"}}>About</Link>
                <Link className="App-link" to="/Profile" style={{marginLeft:"20px"}}>Profile</Link>
            </nav> 
          <button>Enter</button>
        </header>
      </div>
    );
};
export default Home;