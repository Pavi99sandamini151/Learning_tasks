import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FirstPage from "./pages/FirstPage";

const App = () => {
    const [user] = useState({});

    return (
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<FirstPage/>}/>
                <Route  path='/home' element={<Home/>}/>
                <Route  path='/login'element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
