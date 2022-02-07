import './App.css';
import React from 'react';
import { HashRouter,Route,Routes} from "react-router-dom";
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';
import University from './components/University';
import Junior from './components/Junior';
import Senior from './components/Senior';
import SignUp from './components/SignUp';
import HomePage from './components/Homepage';

const App=()=>{
  return(
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Junior" element={<Junior />}/>
        <Route path="/Senior" element={<Senior />}/>
        <Route path="/University" element={<University />}/>
        <Route path="/SignUp" element={<SignUp />}/>
      </Routes> 
        </HashRouter>
  );
}
export default App;

