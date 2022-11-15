import React, {useState} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import photo from "../assets/signup.png";
import axios from "axios";

const Signup = () => {
    const [user,setUser] = useState({
        username:"",
        password: ""
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
        const {name,value} = e.target
        setUser({
            ...user,//spread operator
            [name]:value
        })
    }

    const register = ()=> {
        console.log('hi');
        const {username, password} = user
        if (username && password) {
            axios.post("http://localhost:5000/signup", user)
                .then((res) => {
                    console.log(res);
                }, (error) => {
                    console.log(error);
                });
        } else {
            alert("invalid input")
        };
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
                                        <h1>Sign Up</h1>
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
                                    <button style={{width:150, padding:5,borderRadius:7}} onClick={register} type="button">
                                        Sign up
                                    </button>
                                </Row>
                            </form>
                        </Row>
                        <Row>
                            <Col className="p-0 m-2">
                                <Row className="m-0 p-2">
                                    If you haven't sign up
                                </Row>
                                <Row className="m-0 p-2">
                                    <button style={{width:150, padding:5,borderRadius:7,backgroundColor:'rebeccapurple'}}>
                                        <a href={'/login'} style={{textDecoration:'none', color:'black'}}>log in</a>
                                    </button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;