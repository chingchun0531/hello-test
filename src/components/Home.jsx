import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '/Users/veronica.lin/reactJS/hello-test/src/logo.svg';
import '/Users/veronica.lin/reactJS/hello-test/src/App.css';
import axios from "axios";

function Home(){
  const [user_name,setuser_name] = useState("");
  const [user_password, setuser_password] = useState("");
  let navigate = useNavigate();
  const login = (e) =>{
    e.preventDefault();//阻止發生默認行為
    if(user_name!=="" && user_password!==""){
      axios
      .post("http://localhost:5000/",{
        user_name:user_name,
        user_password:user_password,
      })
      .then((res)=>{
        alert("Log in Success!");
        navigate("/HomePage");
      })
      .catch((e)=>{
          alert("Wrong userid or password!");
      });
    }else if(user_name === ""){
      alert("Enter Username.");
    }else{
      alert("Enter Your Password.");
    }
  };
    return(
        <div className="App">
        <header className="App-header">
        <h1>Hello World</h1>
        <h2>Log In</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={login} action='/' method='POST'>
          <label className="tit">UserName</label><br/>
          <input className="in" type="text" placeholder="Enter your username..." value={user_name} onChange={(e)=>{setuser_name(e.target.value)}}/><br/>
          <label className="tit">PassWord</label><br/>
          <input className="in" type="password" placeholder="Enter your password..." value={user_password} onChange={(e)=>{setuser_password(e.target.value)}}/><br/>
          <button className="homebtn" type="submit">Log In</button>
          <p style={{fontSize:"8px"}}>Not a member yet? Click here to <Link className="App-link" to="/SignUp">Sign up</Link></p>
        </form>
        </header>
      </div>
    );

}
export default Home;