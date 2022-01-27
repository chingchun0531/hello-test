import axios from "axios";
import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/Users/veronica.lin/reactJS/hello-test/src/App.css";

function SignUp(){
        const [user_name, setuser_name] = useState("");
        const [user_password,setpassword] = useState("");
        const [confirm_password, setconfirm_password] = useState("");
        const [user_mail, setuser_mail] = useState("");
        const [user_birth, setuser_birth] = useState("");
        const [user_phone, setuser_phone] = useState("");
        const [user_sex, setuser_sex] = useState("");
        const navigate = useNavigate();
        const signup=(e)=>{
          e.preventDefault();
          if(user_name!=="" && user_password!=="" && confirm_password!=="" && user_password===confirm_password ){
            axios
            .post("http://localhost:5000/SignUp",{
              user_name,
              user_password,
              user_mail,
              user_birth,
              user_phone,
              user_sex
            })
            .then((res)=>{
              alert("Register Successfully!",user_name);
              navigate("/");
            })
            .catch((error)=>{
              if(error.response){
                alert("Username already exist. Please try another name.");
              }else{
                alert("Error.",error);
              }
            });
          }else if(user_name===""){
            alert("Set Username!");
          }else if(user_password===""){
            alert("Set your password!");
          }else if(user_password!==confirm_password){
            alert("Confirm your password again!");
          }
        };
    return(
        <div className="App">
        <header className="App-header">
        <h1 style={{padding:"10px"}}>Sign Up</h1>
          <form onSubmit={signup} action='/SignUp' method='POST'>
          <label className="tit">UserName</label><br/>
          <input className="in" type="text" placeholder="Set your username..." value={user_name} onChange={(e)=>{setuser_name(e.target.value)}}/><br/>
          <label className="tit">Password</label><br/>
          <input className="in" type="password" placeholder="Set your password..." value={user_password} onChange={(e)=>{setpassword(e.target.value)}}/><br/>
          <label className="tit">Confirm Password</label><br/>
          <input className="in" type="password" placeholder="Confirm your password..." value={confirm_password} onChange={(e)=>{setconfirm_password(e.target.value)}}/><br/>
          <label className="tit">Email</label><br/>
          <input className="in" type="email" placeholder="Email address..." value={user_mail} onChange={(e)=>{setuser_mail(e.target.value)}}/><br/>
          <label className="tit">Phone Number</label><br/>
          <input className="in" type="tel" placeholder="Your phone number..." value={user_phone} onChange={(e)=>{setuser_phone(e.target.value)}}/><br/>
          <label className="tit">Sex</label><br/>
          <input type="radio" id="male" name="user_sex" value="Male" onChange={(e)=>{setuser_sex(e.target.value)}}/><label for="Male" style={{margin:"10px"}}>Male</label>
          <input type="radio" id="female" name="user_sex" value="Female" onChange={(e)=>{setuser_sex(e.target.value)}}/><label for="Female" style={{margin:"10px"}}>Female</label>
          <input type="radio" id="other" name="user_sex" value="Other" onChange={(e)=>{setuser_sex(e.target.value)}}/><label for="Other" style={{margin:"10px"}}>Other</label><br/>
          <label className="tit">Your Birth</label><br/>
          <input type="date" value={user_birth} onChange={(e)=>{setuser_birth(e.target.value)}}/><br/>
          <label className="tit">Your Address</label><br/>
          <button className="homebtn" type="submit">Sign Up</button>
          <p style={{fontSize:"8px"}}>Already have a account? Click here to <Link className="App-link" to="/">Log in</Link></p>
        </form>
        </header>
      </div>
    );
}
export default SignUp;