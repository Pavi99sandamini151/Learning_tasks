import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Firstpage from "./components/firstpage";
import Home from "./components/home";
import Login from "./components/login";

function App() {
    const [user,setLoginUser] = useState({});
    return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Firstpage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route  path='/login'element={<Login setLoginUser={setLoginUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
