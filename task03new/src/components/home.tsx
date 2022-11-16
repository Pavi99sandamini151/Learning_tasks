import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import photo from "../assets/home.png";

const Home = () => {
    const location = useLocation();
    const user = location.state;
    // @ts-ignore
    const email = user.name;
    // @ts-ignore
    const password = user.password;

    return(
        <Container>
            <Row className='m-0 justify-content-end'>
                <Col className='p-0 float-end' xs={2}>
                    <a href={'/login'} style={{textDecoration:'none', color:'black'}}>log out</a>
                </Col>
            </Row>
            <Row className='m-0'>
                <Col className='p-0'>
                    <Image src={photo} width='100%' fluid/>
                </Col>
                <Col className='p-0 mt-4'>
                    <h1>Home page</h1>
                    <h2>User email</h2>
                    <p>{email}</p>
                    <h2>Password</h2>
                    <p>{password}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;