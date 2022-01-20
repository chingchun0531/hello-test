import './App.css';
import React from 'react';
import { HashRouter,Route,Routes} from "react-router-dom";
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';
import University from './components/University';
import Junior from './components/Junior';
import Senior from './components/Senior';

const App=()=>{
  return(
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home name="Chun" />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Junior" element={<Junior />}/>
        <Route path="/Senior" element={<Senior />}/>
        <Route path="/University" element={<University />}/>
      </Routes> 
        </HashRouter>
  );
}
export default App;

