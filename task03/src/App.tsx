import React, {useState} from 'react';
import './App.css';
// @ts-ignore
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './components/login';
import Home from './components/home';
import Signup from "./components/signup";
import Firstpage from "./components/first_page";

const App = () => {
    const [user,setLoginUser] = useState({});

    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path='/'><Firstpage/></Route>
                <Route  path='/home' >
                    {/*{*/}
                    {/*    user && user._id ? <Home/>:<Login setLoginUser={setLoginUser}/>*/}
                    {/*}*/}
                    <Home/>
                </Route>
                <Route  path='/login'><Login setLoginUser={setLoginUser}/></Route>
                <Route  path='/signup'><Signup/></Route>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
