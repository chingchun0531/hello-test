import './App.css';
import React from 'react';
import { HashRouter,Route,Routes} from "react-router-dom";
import About from './components/About';
import Profile from './components/Profile';
import Home from './components/Home';

const App=()=>{
  return(
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home name="Chun" />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes> 
        </HashRouter>
  );
}
export default App;

