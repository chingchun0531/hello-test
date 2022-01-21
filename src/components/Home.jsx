import React,{ useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from '/Users/veronica.lin/reactJS/hello-test/src/logo.svg';
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';
import axios from "axios";

function Home(){
  const [userid,setuserid] = useState("");
  const [password, setpassword] = useState("");
  const login = (event) =>{
    event.preventDefault();//阻止發生默認行為
    if(userid!=="" && password!==""){
      axios
      .post("http://localhost:3000/",{
        userid:userid,
        password:password,
      })
      .then((res)=>{
        alert("Log in Success!");
        Navigate("/About");
      })
      .catch((e)=>{
        if(e.response.error){
          alert("Wrong Userid or Password!");
        }
      });
    }else if(userid === ""){
      alert("Enter Userid.");
    }else{
      alert("Enter Password.");
    }
  };
    return(
        <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
        <h2>Log In</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <label>UserId</label>
          <input className="in" type="text" placeholder="Enter your userid..." defaultValue={userid} value={userid} onChange={(e)=>{setuserid(e.target.value)}}/>
          <label>PassWord</label>
          <input className="in" type="text" placeholder="Enter your password..." defaultValue={password} value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          <nav>
                <Link className="App-link" to="/About">About</Link>
            </nav> 
          <button className="homebtn" type="submit">Log In</button>
          <p>Not a member yet? Click here to <Link className="App-link" to="/SignUp">SignUp</Link></p>
        </header>
      </div>
    );
}
export default Home;