import { useState } from "react";
import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () =>
{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const url = 'http://restapi.adequateshop.com/api/authaccount/login';

    const handleChange = (e: { target: { name: any; value: any; }; }) =>
    {
        const {name, value} = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
    }

    const login = async () => {
        try{
            const response = await axios.post(url, user );
            const msg = response.data.message;
            if (msg === 'success')
            {
                navigate('/home', { state: { name: user.email }});
            }
            else
            {
                alert(response.data.message);
            }
        }
        catch (e)
        {
            console.log(e);
        }
    }

    return (
        <Container className="justify-content-center pt-5">
            <Row className="m-0">
                <Col className="p-0">
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
                                    <label className="m-2">Enter User Email</label>
                                    <input
                                        placeholder="Enter User Name"
                                        type="text"
                                        name="email"
                                        value={ user.email }
                                        onChange={ handleChange }
                                    />
                                </Row>
                                <Row className="m-0 p-2">
                                    <label className="m-2">Enter Password</label>
                                    <input
                                        placeholder="Enter Password"
                                        type="password"
                                        name="password"
                                        value={ user.password }
                                        onChange={ handleChange }
                                    />
                                </Row>
                                <Row className="m-0 p-2">
                                    <button
                                        style={{width: 150, padding: 5, borderRadius: 7, backgroundColor: '#ff735f'}}
                                        onClick={ login } type="button">
                                        Login
                                    </button>
                                </Row>
                            </form>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;