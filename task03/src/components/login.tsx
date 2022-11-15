import React, {useState} from "react";
import {Col, Container, Row, Image, Button} from "react-bootstrap";
import photo from '../assets/login.png';
import axios from 'axios';
// @ts-ignore
import {  useHistory } from "react-router-dom";

// @ts-ignore
const Login = ({setLoginUser}) => {
    // const navigate = useNavigate();
    const history = useHistory();
    const [user,setUser] = useState({
        username:"",
        password: ""
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const {name, value} = e.target
        setUser({
            ...user,//spread operator
            [name]: value
        })
    }
    const login =()=>{
        axios.post("http://localhost:3000/login",user)
            .then(res=>{alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/home")})
    }

    return(
        <Container  className="justify-content-center pt-5">
            <Row className="m-0">
                <Col className="p-0">
                    <Image src={photo} width='80%'/>
                </Col>
                <Col className="p-0">
                    <Container>
                        <Row>
                            <form>
                                <Row className="m-0 p-2 mt-5">
                                    <Col className="p-0">
                                        <h1>Login</h1>
                                    </Col>
                                </Row>
                                <Row className="m-0 p-2 mt-5">
                                    <label className="m-2">Eenter User Name</label>
                                    <input
                                        placeholder="Enter User Name"
                                        type = "text"
                                        name = "username"
                                        value={user.username}
                                        onChange={handleChange}
                                    />
                                </Row>
                                <Row className="m-0 p-2">
                                    <label className="m-2">Enter Password</label>
                                    <input
                                        placeholder="Enter Password"
                                        type = "password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </Row>
                                <Row className="m-0 p-2">
                                    <button style={{width:150, padding:5,borderRadius:7}} onClick={login}>
                                        Login
                                    </button>
                                </Row>
                            </form>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    If you haven't sign up
                                </Row>
                                <Row>
                                    <button
                                            style={{width:150, padding:5,borderRadius:7}}>
                                        <a href={'/signup'}>sign up</a>
                                    </button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;