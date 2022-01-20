import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "/Users/veronica.lin/reactJS/hello-test/src/App.css";
import logo from '/Users/veronica.lin/reactJS/hello-test/src/logo.svg';

function SignUp(){
        const [account, setAccount] = useState("");
        const [password,setPassword] = useState("");
    return(
        <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
        <h2>Sign Up</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <label>UserId</label>
          <input className="in" type="text" placeholder="Set your id..." defaultValue={account} value={account} onChange={(e)=>{setAccount(e.target.value)}}/>
          <label>Password</label>
          <input className="in" type="text" placeholder="Set your password..." defaultValue={password} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <label>Confirm Password</label>
          <input className="in" type="text" placeholder="Confirm your password..."></input>
          <button className="homebtn">Sign Up</button>
          <p>Already have a account? Click here to <Link className="App-link" to="/">LogIn</Link></p>
        </header>
      </div>
    );
}
export default SignUp;