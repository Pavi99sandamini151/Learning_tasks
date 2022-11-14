import React, {useState} from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
// @ts-ignore
import { useNavigate } from "react-router-dom";
import photo from '../assets/signup.png';
import Message from "./message";

const Login = () => {

    const navigate  = useNavigate();
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const isusernameValid = Boolean(username);
    const ispasswrodValid = Boolean(password);
    const [errorMessage,seterrorMessage] = React.useState(" ");

    // const [user,setUser] = React.useState(null);
    const handleChangeusername = (event: { target: { value: React.SetStateAction<String>; }; }) => {
        // @ts-ignore
        setUsername(event.target.value);
    }

    const handleChangepassword = (event: { target: { value: React.SetStateAction<String>; }; }) => {
        // @ts-ignore
        setPassword(event.target.value);
    }


    const handlesubmit = () => {
        if(!isusernameValid){
            seterrorMessage('empty user name');
        }else if(!ispasswrodValid){
            seterrorMessage('empty password');
        }else{
            // @ts-ignore
            if(username !== 'admin')
            {
                seterrorMessage('username is incorrect');
            }
            // @ts-ignore
            else if(password !== 'password')
            {
                seterrorMessage('password is incorrect');
            }
            else {
                navigate('/home' , {state:{name:username, password:password }});
            }
        }
    }

    return(
        <Container  className="justify-content-center pt-5">

            <Row className="m-0">
                <Col className="p-0">
                    <Image src={photo} width='80%'/>
                </Col>
                <Col className="p-0">
                    <Container>
                        <form>
                            <Row className="m-0 p-2 mt-5">
                                <Col className="p-0">
                                    <h1>Login</h1>
                                </Col>
                            </Row>
                            <Row className="m-0 p-2 mt-3">
                                <label className="m-2">Eenter User Name</label>
                                <input
                                    placeholder="Enter User Name"
                                    type = "text"
                                    name = "username"
                                    value = {username}
                                    onChange={handleChangeusername}
                                />

                            </Row>
                            <Row className="m-0 p-2">
                                <label className="m-2">Enter Password</label>
                                <input
                                    placeholder="Enter Password"
                                    type = "password"
                                    name = "password"
                                    value = {password}
                                    onChange={handleChangepassword}
                                />
                            </Row>
                            <Row className="m-0 p-2">
                                <Button  onClick={handlesubmit} >
                                    Login
                                </Button>
                            </Row>
                            <Row>
                                <Message message={errorMessage}/>
                            </Row>
                        </form>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

